/**
 * app.js
 *
 * This file sets up an Express.js server with middleware and routes.
 *
 * Middleware used:
 * - CORS for enabling Cross-Origin Resource Sharing.
 * - Morgan for HTTP request logging.
 * - Express.json for parsing JSON request bodies.
 *
 * Routes:
 * - GET "/" returns a welcome message for the API.
 * - "/api" prefix uses userRoutes for handling user-related API endpoints.
 * - Catch-all endpoint for handling 404 errors.
 */

import express from "express";
import cors from "cors";
import morgan from "morgan";

import userRoutes from "./routes/user.routes.js";
import { connectDB } from "./config/db.js";

const app = express();
connectDB();

// Middleware setup
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(morgan("dev")); // HTTP request logging in development mode
app.use(express.json()); // Parse JSON request bodies

// Root endpoint
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello World!!! Welcome to the Bender's ToDo List - API.",
  });
});

// API routes
app.use("/api", userRoutes); // Routes for user-related API endpoints

// Catch-all endpoint for 404 errors
app.use((req, res) => {
  res.status(404).json({
    message: "Sorry, this endpoint does not exist.",
  });
});

export default app;
