import { Sequelize } from "sequelize";
import { config } from "dotenv";
import path from 'path';
import mysql2 from 'mysql2'; // Import mysql2 as ES module


// Load environment variables from .env file
config();

// const db = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASS,
//     {
//         host: process.env.DB_HOST,
//         dialect: "mysql",
//         port: process.env.DB_PORT,
//         logging: false // Optional: Turn off logging SQL queries
//     }
// );

const db = new Sequelize({
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database:process.env.DB_NAME,
    dialect: 'mysql',
    dialectModule: mysql2, // Use mysql2 as the dialect module
    benchmark: true

});

export default db;
