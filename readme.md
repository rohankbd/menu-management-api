# Menu Management API

This project is a Node.js backend server for menu management, developed using Express.js and PostgreSQL. It allows you to manage categories, subcategories, and items within a menu. The API supports creating, reading, updating, and searching for items, subcategories, and categories.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Questions](#questions)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/rohankbd/menu-management-api.git
    cd menu-management-api
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up the PostgreSQL database:
    Create a PostgreSQL database.
    Update the database configuration in config/db.js with your database credentials.

4. Run the database migrations to create the necessary tables:
    ```bash
    cd menu-management-backend
    npm run migrate
    ```

5. Start the server:
    ```bash
    nodemon app.js
    ```
    OR
    ```bash
    node app.js
    ```

## Usage

You can use Postman to test the API endpoints. Import the provided Postman collection file collection.json to get started quickly.

## API Endpoints

Category Endpoints
    - Get all categories
        - GET /api/categories
    - Get category by ID
        - GET /api/categories/:categoryId
    - Create a new category
        - POST /api/categories
    - Update category by ID
        - PUT /api/categories/:categoryId

2. Subcategory Endpoints
    - Get all subcategories
        - GET /api/subcategories
    - Get subcategories by category ID
        - GET /api/subcategories/category/:categoryId
    - Get subcategory by ID
        - GET /api/subcategories/:subcategoryId
    - Create a new subcategory
        - POST /api/subcategories
    - Update subcategory by ID
        - PUT /api/subcategories/:subcategoryId

3. Item Endpoints
    - Get all items
        - GET /api/items
    - Get items by category ID
        - GET /api/items/category/:categoryId
    - Get items by subcategory ID
        - GET /api/items/subcategory/:subcategoryId
    - Get item by ID
        - GET /api/items/:itemId
    - Search items by name
        - GET /api/items/search?name=:itemName
    - Get item by name or ID
        - GET /api/items/:identifier
    - Create a new item
        - POST /api/items
    - Update item by ID
        - PUT /api/items/:itemId

## Questions

#### Which database have you chosen and why?

I chose PostgreSQL because it is a powerful, open-source relational database system with a strong emphasis on extensibility and standards compliance. It is well-suited for complex queries and large datasets, making it a good choice for a menu management system.

#### Three things that you learned from this assignment:

Use of specific search queries
Creation of migration files separately(without Sequelize)
Using Pool instead of Sequelize

#### What was the most difficult part of the assignment?
The most challenging aspect of this assignment was ensuring the correct and efficient handling of relationships between categories, subcategories, and items within the database.

#### What would you have done differently given more time?
Given more time, I would implement additional features such as pagination for item lists, user authentication and authorization, and more comprehensive input validation and error handling.
