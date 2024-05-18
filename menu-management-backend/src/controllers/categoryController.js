const Category = require('../models/categoryModel');

const categoryController = {
  // Get all categories
  getAllCategories: async (req, res) => {
    try {
      const categories = await Category.getAllCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get category by ID
  getCategoryById: async (req, res) => {
    const categoryId = req.params.categoryId;
    try {
      const category = await Category.getCategoryById(categoryId);
      res.json(category);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Create a new category
  createCategory: async (req, res) => {
    const { name, image, description, taxApplicability, tax, taxType } = req.body;
    try {
      const newCategory = await Category.createCategory(name, image, description, taxApplicability, tax, taxType);
      res.status(201).json(newCategory);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update a category by ID
  updateCategory: async (req, res) => {
    const categoryId = req.params.categoryId;
    const { name, image, description, taxApplicability, tax, taxType } = req.body;
    try {
      const updatedCategory = await Category.updateCategory(categoryId, name, image, description, taxApplicability, tax, taxType);
      res.json(updatedCategory);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = categoryController;
