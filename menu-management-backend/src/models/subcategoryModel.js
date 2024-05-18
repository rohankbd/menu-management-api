const pool = require('../db');

class Subcategory {
  static async getAllSubcategories() {
    try {
      const result = await pool.query('SELECT * FROM subcategories');
      return result.rows;
    } catch (error) {
      throw new Error(`Error retrieving subcategories: ${error}`);
    }
  }

  static async getSubcategoriesByCategoryId(categoryId) {
    try {
      const result = await pool.query('SELECT * FROM subcategories WHERE category_id = $1', [categoryId]);
      return result.rows;
    } catch (error) {
      throw new Error(`Error retrieving subcategories: ${error}`);
    }
  }

  static async getSubcategoryById(subcategoryId) {
    try {
      const result = await pool.query('SELECT * FROM subcategories WHERE id = $1', [subcategoryId]);
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error retrieving subcategory: ${error}`);
    }
  }

  static async createSubcategory(categoryId, name, image, description, taxApplicability, tax) {
    try {
      const result = await pool.query(
        'INSERT INTO subcategories (category_id, name, image, description, tax_applicability, tax) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [categoryId, name, image, description, taxApplicability, tax]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error creating subcategory: ${error}`);
    }
  }

  static async updateSubcategory(subcategoryId, name, image, description, taxApplicability, tax) {
    try {
      const result = await pool.query(
        'UPDATE subcategories SET name = $1, image = $2, description = $3, tax_applicability = $4, tax = $5 WHERE id = $6 RETURNING *',
        [name, image, description, taxApplicability, tax, subcategoryId]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error updating subcategory: ${error}`);
    }
  }
}

module.exports = Subcategory;
