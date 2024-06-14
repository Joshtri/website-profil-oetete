import { Sequelize } from "sequelize";
import { config } from "dotenv";
import path from 'path';

// Load environment variables from .env file
config();

const db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: "mysql",
        port: process.env.DB_PORT,
        logging: false // Optional: Turn off logging SQL queries
    }
);

export default db;
