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
 *
 * Note: Make sure to create a .env file in the root directory of your project and define the PORT variable
 *       to specify the server's port number.
 */

import { config } from "dotenv";

// Load environment variables from .env file
config();

// Constants
export const PORT = process.env.PORT;
