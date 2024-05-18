const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Get all categories
router.get('/', categoryController.getAllCategories);

// Get category by ID
router.get('/:categoryId', categoryController.getCategoryById);

// Create a new category
router.post('/', categoryController.createCategory);

// Update a category by ID
router.put('/:categoryId', categoryController.updateCategory);

module.exports = router;
