const Category = require('../models/Category');

exports.list = async (_req, res) => {
  try {
    const items = await Category.find().lean();
    res.json(items.map(c => ({ id: c._id, name: c.name })));
  } catch (e) {
    res.status(500).json({ message: 'Server error' });
  }
};
