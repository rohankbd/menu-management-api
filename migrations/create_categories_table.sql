CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  image TEXT,
  description TEXT,
  tax_applicability BOOLEAN,
  tax NUMERIC,
  tax_type TEXT
);
