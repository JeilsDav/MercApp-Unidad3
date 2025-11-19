const Product = require('../models/Product');

// Helper para validar URL
function isValidUrl(str) {
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
}

// GET /api/products
exports.list = async (req, res) => {
  try {
    const { q, categoryId } = req.query;
    const query = {};

    if (q) {
      query.$or = [
        { name: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } },
      ];
    }

    if (categoryId) {
      query.categoryId = categoryId;
    }

    const items = await Product.find(query).lean();
    res.json(items);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Server error' });
  }
};

// GET /api/products/:id
exports.get = async (req, res) => {
  try {
    const p = await Product.findById(req.params.id).lean();
    if (!p) return res.status(404).json({ message: 'Not found' });
    res.json(p);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Server error' });
  }
};

// POST /api/products
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
      name,
      description: description || '',
      price,
      imageUrl: imageUrl || '',
      categoryId,
      stock: Math.max(Number(stock || 0), 0),
    });

    res.status(201).json(created);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Server error' });
  }
};

// PUT /api/products/:id
// PATCH /api/products/:id
exports.update = async (req, res) => {
  try {
    const { imageUrl } = req.body;

    if (imageUrl !== undefined && imageUrl !== '' && !isValidUrl(imageUrl)) {
      return res.status(400).json({ message: 'imageUrl must be a valid URL' });
    }

    const updates = {};
    const allowed = ['name', 'description', 'price', 'imageUrl', 'categoryId', 'stock'];

    for (const field of allowed) {
      if (req.body[field] !== undefined) {
        updates[field] = req.body[field];
      }
    }

    if (updates.price !== undefined) {
      updates.price = Number(updates.price);
      if (Number.isNaN(updates.price) || updates.price <= 0) {
        return res.status(400).json({ message: 'price must be > 0' });
      }
    }

    if (updates.stock !== undefined) {
      updates.stock = Math.max(0, Number(updates.stock) || 0);
    }

    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true, runValidators: true }
    ).lean();

    if (!updated) return res.status(404).json({ message: 'Not found' });
    res.json(updated);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Server error' });
  }
};

// DELETE /api/products/:id
exports.remove = async (req, res) => {
  try {
    const del = await Product.findByIdAndDelete(req.params.id).lean();
    if (!del) return res.status(404).json({ message: 'Not found' });
    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Server error' });
  }
};
