const express = require('express');
const router = express.Router();
const products = require('../controllers/products');
const categories = require('../controllers/categories');

// Products
router.get('/products', products.list);
router.get('/products/:id', products.get);
router.post('/products', products.create);
router.put('/products/:id', products.update);
router.patch('/products/:id', products.update);
router.delete('/products/:id', products.remove);

// Categories
router.get('/categories', categories.list);

module.exports = router;
