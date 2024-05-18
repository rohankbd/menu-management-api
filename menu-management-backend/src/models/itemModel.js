const pool = require('../db');

class Item {
  static async getAllItems() {
    try {
      const result = await pool.query('SELECT * FROM items');
      return result.rows;
    } catch (error) {
      throw new Error(`Error retrieving items: ${error}`);
    }
  }

  static async getItemsByCategoryId(categoryId) {
    try {
      const result = await pool.query('SELECT * FROM items WHERE category_id = $1', [categoryId]);
      return result.rows;
    } catch (error) {
      throw new Error(`Error retrieving items: ${error}`);
    }
  }

  static async getItemsBySubcategoryId(subcategoryId) {
    try {
      const result = await pool.query('SELECT * FROM items WHERE subcategory_id = $1', [subcategoryId]);
      return result.rows;
    } catch (error) {
      throw new Error(`Error retrieving items: ${error}`);
    }
  }

  static async getItemById(itemId) {
    try {
      const result = await pool.query('SELECT * FROM items WHERE id = $1', [itemId]);
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error retrieving item: ${error}`);
    }
  }

  static async createItem(categoryId, subcategoryId, name, image, description, taxApplicability, tax, baseAmount, discount, totalAmount) {
    try {
      const result = await pool.query(
        'INSERT INTO items (category_id, subcategory_id, name, image, description, tax_applicability, tax, base_amount, discount, total_amount) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
        [categoryId, subcategoryId, name, image, description, taxApplicability, tax, baseAmount, discount, totalAmount]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error creating item: ${error}`);
    }
  }

  static async updateItem(itemId, name, image, description, taxApplicability, tax, baseAmount, discount, totalAmount) {
    try {
      const result = await pool.query(
        'UPDATE items SET name = $1, image = $2, description = $3, tax_applicability = $4, tax = $5, base_amount = $6, discount = $7, total_amount = $8 WHERE id = $9 RETURNING *',
        [name, image, description, taxApplicability, tax, baseAmount, discount, totalAmount, itemId]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error updating item: ${error}`);
    }
  }

  static async searchItemsByName(itemName) {
    try {
      const result = await pool.query(
        'SELECT * FROM items WHERE name ILIKE $1', [`%${itemName}%`]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error updating item: ${error}`);
    }
  }

  static async getItemByName(name) {
    try {
      const result = await pool.query('SELECT * FROM items WHERE name = $1', [name]);
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error updating item: ${error}`);
    }
  }
}

module.exports = Item;
