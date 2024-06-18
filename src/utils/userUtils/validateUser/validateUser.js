import { validateUsername } from "./validateUsername.js";
import { validateEmail } from "./validateEmail.js";
import { validatePassword } from "./validatePassword.js";

/**
 * validateUser.js
 * 
 * Validates user registration data including username, email, and password.
 *
 * This file is a function validates each component of user registration data:
 * - Username must adhere to specific criteria defined in `validateUsername`.
 * - Email must adhere to specific criteria defined in `validateEmail`.
 * - Password must adhere to specific criteria defined in `validatePassword`.
 *
 * @param {object} body - The object containing user registration data.
 * @param {string} body.username - The username to be validated.
 * @param {string} body.email - The email address to be validated.
 * @param {string} body.password - The password to be validated.
 * @returns {Object} An object containing validation results.
 * - If validation succeeds, returns `{ isError: false, valid: true, message: "User data has been successfully validated." }`.
 * - If validation fails for any component, returns `{ isError: false, valid: false, message: "Error message describing the validation failure." }`.
 * - If an unexpected error occurs during validation, returns `{ isError: true, valid: false, message: "Error occurred during user data validation." }`.
 *
 * @example
 * const userData = {
 *   username: 'user123',
 *   email: 'user@example.com',
 *   password: 'securePassword123'
 * };
 * const validationResult = validateUser(userData);
 * console.log(validationResult);
 */
export const validateUser = (body) => {
  try {
    // Basic structure and type validation
    if (
      typeof body !== "object" ||
      typeof body.username !== "string" ||
      typeof body.email !== "string" ||
      typeof body.password !== "string"
    ) {
      return {
        isError: false,
        valid: false,
        message:
          "Invalid input: username, email, and password must all be strings.",
      };
    }

    // Validate username
    const username = validateUsername(body.username);
    if (username.valid !== true) {
      return {
        isError: false,
        valid: username.valid,
        message: username.message,
      };
    }

    // Validate email
    const email = validateEmail(body.email);
    if (email.valid !== true) {
      return { isError: false, valid: email.valid, message: email.message };
    }

    // Validate password
    const password = validatePassword(body.password);
    if (password.valid !== true) {
      return {
        isError: false,
        valid: password.valid,
        message: password.message,
      };
    }

    // All validations passed
    return {
      isError: false,
      valid: true,
      message: "User data has been successfully validated.",
    };
  } catch (error) {
    // Handle unexpected errors during validation
    return {
      isError: true,
      valid: false,
      message: "Error occurred during user data validation.",
    };
  }
};
