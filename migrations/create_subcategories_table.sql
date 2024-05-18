CREATE TABLE IF NOT EXISTS subcategories (
  id SERIAL PRIMARY KEY,
  category_id INTEGER REFERENCES categories(id),
  name TEXT NOT NULL,
  image TEXT,
  description TEXT,
  tax_applicability BOOLEAN,
  tax NUMERIC
);
