const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Get all items
router.get('/', itemController.getAllItems);

// Searcg items by name
router.get('/search', itemController.searchItemsByName);

// Get items by category ID
router.get('/category/:categoryId', itemController.getItemsByCategoryId);

// Get items by subcategory ID
router.get('/subcategory/:subcategoryId', itemController.getItemsBySubcategoryId);

// Get item by ID
router.get('/id/:itemId', itemController.getItemById);

// Create a new item under a category or subcategory
router.post('/', itemController.createItem);

// Update an item by ID
router.put('/:itemId', itemController.updateItem);

// Get item by name
router.get('/:name', itemController.getItemByName);

module.exports = router;
