const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

// Database configuration
const pool = require('./src/db/index');

// Function to run a SQL file
const runSqlFile = async (filePath) => {
  const sql = fs.readFileSync(filePath, 'utf8');
  await pool.query(sql);
};

// Function to run migrations
const runMigrations = async () => {
  try {
    await runSqlFile(path.join(__dirname, '../migrations', 'create_categories_table.sql'));
    await runSqlFile(path.join(__dirname, '../migrations', 'create_subcategories_table.sql'));
    await runSqlFile(path.join(__dirname, '../migrations', 'create_items_table.sql'));
    console.log('Migrations ran successfully');
  } catch (error) {
    console.error('Error running migrations:', error);
  } finally {
    pool.end();
  }
};

runMigrations();
