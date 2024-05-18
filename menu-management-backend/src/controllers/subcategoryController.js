const Subcategory = require('../models/subcategoryModel');

const subcategoryController = {
  // Get all subcategories
  getAllSubcategories: async (req, res) => {
    try {
      const subcategories = await Subcategory.getAllSubcategories();
      res.json(subcategories);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get subcategories by category ID
  getSubcategoriesByCategoryId: async (req, res) => {
    const categoryId = req.params.categoryId;
    try {
      const subcategories = await Subcategory.getSubcategoriesByCategoryId(categoryId);
      res.json(subcategories);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get subcategory by ID
  getSubcategoryById: async (req, res) => {
    const subcategoryId = req.params.subcategoryId;
    try {
      const subcategory = await Subcategory.getSubcategoryById(subcategoryId);
      res.json(subcategory);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Create a new subcategory under a category
  createSubcategory: async (req, res) => {
    const categoryId = req.params.categoryId;
    const { name, image, description, taxApplicability, tax } = req.body;
    try {
      const newSubcategory = await Subcategory.createSubcategory(categoryId, name, image, description, taxApplicability, tax);
      res.status(201).json(newSubcategory);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update a subcategory by ID
  updateSubcategory: async (req, res) => {
    const subcategoryId = req.params.subcategoryId;
    const { name, image, description, taxApplicability, tax } = req.body;
    try {
      const updatedSubcategory = await Subcategory.updateSubcategory(subcategoryId, name, image, description, taxApplicability, tax);
      res.json(updatedSubcategory);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = subcategoryController;
