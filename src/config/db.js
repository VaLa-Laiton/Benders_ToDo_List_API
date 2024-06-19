/**
 * db.js
 * This file sets up the MongoDB connection using Mongoose.
 *
 * Environment variables used:
 *   - MONGO_HOST: MongoDB host address.
 *   - MONGO_PORT: MongoDB port number.
 *   - MONGO_DB: MongoDB database name.
 *
 * Dependencies:
 *   - mongoose: MongoDB object modeling tool designed to work in an asynchronous environment.
 *   - config.js: Configuration file where MONGO_HOST, MONGO_PORT, and MONGO_DB are defined.
 *
 * DB_URI:
 *   - Constructs the MongoDB URI using environment variables for host, port, and database name.
 *
 * Functions:
 *   - connectDB(): Asynchronous function that connects to MongoDB using mongoose.connect().
 *
 * Usage:
 *   - Import connectDB from './config/db.js' and invoke it to establish a connection with MongoDB.
 */

import mongoose from "mongoose";
import { MONGO_HOST, MONGO_PORT, MONGO_DB } from "./config.js";

// MongoDB connection URI
const DB_URI = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;

/**
 * connectDB
 * @description Connects to MongoDB using Mongoose.
 * @returns {Promise<void>} A Promise that resolves once the connection is successfully established.
 * @throws {Error} If connection to MongoDB fails, the error is logged to the console.
 */
export const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
