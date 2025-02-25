# mysql-to-mongodb-migration

This project provides an API for migrating data from a MySQL database (hosted on Hostinger) to a MongoDB database (Atlas). 

## Features

- Connects to both MySQL and MongoDB databases.
- Handles data migration using an Express server.
- Follows the MVC architecture for better organization and maintainability.

## Project Structure

```
mysql-to-mongodb-migration
├── src
│   ├── config
│   ├── controllers
│   ├── models
│   ├── services
│   ├── routes
│   ├── types
│   └── app.ts
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd mysql-to-mongodb-migration
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the root directory and add your database connection details:
   ```
   MYSQL_HOST=your_mysql_host
   MYSQL_USER=your_mysql_user
   MYSQL_PASSWORD=your_mysql_password
   MYSQL_DATABASE=your_mysql_database
   MONGODB_URI=your_mongodb_uri
   ```

4. **Run the application:**
   ```bash
   npm start
   ```

## Usage

- Use the defined API endpoints to initiate data migration from MySQL to MongoDB.
- Refer to the documentation in the controllers for specific endpoint usage.

## License

This project is licensed under the MIT License.