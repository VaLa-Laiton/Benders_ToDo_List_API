/**
 * user.routes.js
 *
 * This file defines routes related to user management using Express Router.
 *
 * Routes:
 * - POST "/user": Route for creating a new user. It uses the createUser controller function imported
 *   from "../controllers/createUser.js".
 *
 * Example usage:
 * const router = Router();
 * router.post("/user", createUser);
 * export default router;
 *
 * Notes:
 * - Make sure to import Router from "express" and the necessary controller functions for route handling.
 * - This file specifically handles user-related routes, such as creating users.
 */

import { Router } from "express";
import { createUser } from "../controllers/createUser.js";

const router = Router();

// Route: POST "/user"
// Description: Endpoint for creating a new user.
router.post("/user", createUser);

export default router;
