const Item = require('../models/itemModel');

const itemController = {
  // Get all items
  getAllItems: async (req, res) => {
    try {
      const items = await Item.getAllItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get items by category ID
  getItemsByCategoryId: async (req, res) => {
    const categoryId = req.params.categoryId;
    try {
      const items = await Item.getItemsByCategoryId(categoryId);
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get items by subcategory ID
  getItemsBySubcategoryId: async (req, res) => {
    const subcategoryId = req.params.subcategoryId;
    try {
      const items = await Item.getItemsBySubcategoryId(subcategoryId);
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get item by ID
  getItemById: async (req, res) => {
    const itemId = req.params.itemId;
    try {
      const item = await Item.getItemById(itemId);
      res.json(item);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Create a new item under a category or subcategory
  createItem: async (req, res) => {
    const { categoryId, subcategoryId, name, image, description, taxApplicability, tax, baseAmount, discount, totalAmount } = req.body;
    try {
      const newItem = await Item.createItem(categoryId, subcategoryId, name, image, description, taxApplicability, tax, baseAmount, discount, totalAmount);
      res.status(201).json(newItem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update an item by ID
  updateItem: async (req, res) => {
    const itemId = req.params.itemId;
    const { name, image, description, taxApplicability, tax, baseAmount, discount, totalAmount } = req.body;
    try {
      const updatedItem = await Item.updateItem(itemId, name, image, description, taxApplicability, tax, baseAmount, discount, totalAmount);
      res.json(updatedItem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Search items by name
  searchItemsByName: async (req, res) => {
    const itemName = req.query.name;
    try {
      const items = await Item.searchItemsByName(itemName);
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get item by name
  getItemByName: async (req, res) => {
    const identifier = req.params.identifier;
    try {
      let item;
      item = await Item.getItemByName(identifier);
      res.json(item);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = itemController;
