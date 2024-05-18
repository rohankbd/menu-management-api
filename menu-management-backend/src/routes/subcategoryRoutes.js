const express = require('express');
const router = express.Router();
const subcategoryController = require('../controllers/subcategoryController');

// Get all subcategories
router.get('/', subcategoryController.getAllSubcategories);

// Get subcategories by category ID
router.get('/category/:categoryId', subcategoryController.getSubcategoriesByCategoryId);

// Get subcategory by ID
router.get('/:subcategoryId', subcategoryController.getSubcategoryById);

// Create a new subcategory under a category
router.post('/category/:categoryId', subcategoryController.createSubcategory);

// Update a subcategory by ID
router.put('/:subcategoryId', subcategoryController.updateSubcategory);

module.exports = router;
