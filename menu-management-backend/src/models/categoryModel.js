const pool = require('../db');

class Category {
  static async getAllCategories() {
    try {
      const result = await pool.query('SELECT * FROM categories');
      return result.rows;
    } catch (error) {
      throw new Error(`Error retrieving categories: ${error}`);
    }
  }

  static async getCategoryById(categoryId) {
    try {
      const result = await pool.query('SELECT * FROM categories WHERE id = $1', [categoryId]);
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error retrieving category: ${error}`);
    }
  }

  static async createCategory(name, image, description, taxApplicability, tax, taxType) {
    try {
      const result = await pool.query(
        'INSERT INTO categories (name, image, description, tax_applicability, tax, tax_type) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [name, image, description, taxApplicability, tax, taxType]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error creating category: ${error}`);
    }
  }

  static async updateCategory(categoryId, name, image, description, taxApplicability, tax, taxType) {
    try {
      const result = await pool.query(
        'UPDATE categories SET name = $1, image = $2, description = $3, tax_applicability = $4, tax = $5, tax_type = $6 WHERE id = $7 RETURNING *',
        [name, image, description, taxApplicability, tax, taxType, categoryId]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error updating category: ${error}`);
    }
  }
}

module.exports = Category;
