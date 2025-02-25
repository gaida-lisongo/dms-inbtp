import { createConnection } from 'mysql2/promise';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mysqlConfig = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
};

const mongoConfig = {
  uri: process.env.MONGODB_URI,
};

export const connectToMySQL = async () => {
  try {
    const connection = await createConnection(mysqlConfig);
    console.log('Connected to MySQL database');
    return connection;
  } catch (error) {
    console.error('Error connecting to MySQL:', error);
    throw error;
  }
};

export const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongoConfig.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB database');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};