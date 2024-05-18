const express = require('express');
const categoryRoutes = require('./src/routes/categoryRoutes');
const subcategoryRoutes = require('./src/routes/subcategoryRoutes');
const itemRoutes = require('./src/routes/itemRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/categories', categoryRoutes);
app.use('/api/subcategories', subcategoryRoutes);
app.use('/api/items', itemRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
