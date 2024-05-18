CREATE TABLE IF NOT EXISTS items (
  id SERIAL PRIMARY KEY,
  category_id INTEGER REFERENCES categories(id),
  subcategory_id INTEGER REFERENCES subcategories(id),
  name TEXT NOT NULL,
  image TEXT,
  description TEXT,
  tax_applicability BOOLEAN,
  tax NUMERIC,
  base_amount NUMERIC,
  discount NUMERIC,
  total_amount NUMERIC
);
