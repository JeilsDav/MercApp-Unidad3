const Product = require('../models/Product');

// Helper to validate URL (simple check)
function isValidUrl(str) {
  try { new URL(str); return true; } catch { return false; }
}

exports.list = async (req, res) => {
  try {
    const { q, categoryId } = req.query;
    const query = {};
    if (q) {
      query.$or = [
        { name: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } }
      ];
    }
    if (categoryId) query.categoryId = categoryId;

    const items = await Product.find(query).lean();
    res.json(items);
  } catch (e) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.get = async (req, res) => {
  try {
    const p = await Product.findById(req.params.id).lean();
    if (!p) return res.status(404).json({ message: 'Not found' });
    res.json(p);
  } catch (e) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.create = async (req, res) => {
  try {
    const { name, description, price, imageUrl, categoryId, stock } = req.body;

    if (!name || typeof price !== 'number' || price <= 0 || !categoryId) {
      return res.status(400).json({ message: 'Invalid payload' });
    }
    if (imageUrl && !isValidUrl(imageUrl)) {
      return res.status(400).json({ message: 'imageUrl must be a valid URL' });
    }

    const created = await Product.create({
      name, description: description || '', price,
      imageUrl: imageUrl || '', categoryId,
      stock: Math.max(Number(stock || 0), 0)
    });
    res.status(201).json(created);
  } catch (e) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.update = async (req, res) => {
  try {
    const { name, description, price, imageUrl, categoryId, stock } = req.body;

    if (imageUrl !== undefined && imageUrl !== '' && typeof imageUrl === 'string') {
      try { if (!new URL(imageUrl)) throw 0; } catch { 
        return res.status(400).json({ message: 'imageUrl must be a valid URL' });
      }
    }

    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      {
        ...(name !== undefined && { name }),
        ...(description !== undefined && { description }),
        ...(price !== undefined && { price }),
        ...(imageUrl !== undefined && { imageUrl }),
        ...(categoryId !== undefined && { categoryId }),
        ...(stock !== undefined && { stock: Math.max(Number(stock), 0) })
      },
      { new: true, runValidators: True }
    ).lean();

    if (!updated) return res.status(404).json({ message: 'Not found' });
    res.json(updated);
  } catch (e) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.remove = async (req, res) => {
  try {
    const del = await Product.findByIdAndDelete(req.params.id).lean();
    if (!del) return res.status(404).json({ message: 'Not found' });
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ message: 'Server error' });
  }
};
