/**
 * config.js
 *
 * This file initializes environment configuration using dotenv.
 *
 * It loads environment variables from a .env file into process.env using the config method from dotenv.
 *
 * Constants:
 * - PORT: The port number on which the server will listen. It is retrieved from process.env.PORT after
 *   loading the .env file.
 * - MONGO_HOST: MongoDB host address. It is retrieved from process.env.MONGO_HOST after loading the .env file.
 * - MONGO_PORT: MongoDB port number. It is retrieved from process.env.MONGO_PORT after loading the .env file.
 * - MONGO_DB: MongoDB database name. It is retrieved from process.env.MONGO_DB after loading the .env file.
 *
 * Note: Make sure to create a .env file in the root directory of your project and define the following variables:
 *       - PORT: Specify the server's port number.
 *       - MONGO_HOST: Specify the MongoDB host address.
 *       - MONGO_PORT: Specify the MongoDB port number.
 *       - MONGO_DB: Specify the MongoDB database name.
 */

import { config } from "dotenv";

// Load environment variables from .env file
config();

// Constants
export const PORT = process.env.PORT;
export const MONGO_HOST = process.env.MONGO_HOST;
export const MONGO_PORT = process.env.MONGO_PORT;
export const MONGO_DB = process.env.MONGO_DB;
export const BCRYPT_SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS;
