/**
 * saveUser.js
 *
 * Saves user registration data to the database after validation and encryption.
 *
 * This file contains a function that handles the registration process for a new user:
 * - Checks if the provided email address already exists using `searchEmail`.
 * - Encrypts the user's password using `encrypt` from `bcryptUtils`.
 * - Saves the user data (username, email, and encrypted password) to the database using `User` model.
 *
 * @param {Object} userData - The object containing user registration data.
 * @param {string} userData.username - The username of the user to be registered.
 * @param {string} userData.email - The email address of the user to be registered.
 * @param {string} userData.password - The unencrypted password of the user to be registered.
 * @returns {Object} An object containing registration results.
 * - If registration succeeds, returns `{ isError: false, valid: true, message: "The user was registered successfully.", userInformation: savedUser }`.
 * - If registration fails due to existing email, returns `{ isError: false, valid: false, message: "User registration failed: This email address is already registered.", userInformation: null }`.
 * - If an error occurs during email search, password encryption, or user saving, returns `{ isError: false, valid: false, message: "Error message describing the registration failure.", userInformation: null }`.
 * - If an unexpected error occurs, returns `{ isError: true, valid: false, message: "There was an error while registering the user.", userInformation: null }`.
 *
 * @example
 * const userData = {
 *   username: 'newuser',
 *   email: 'newuser@example.com',
 *   password: 'securePassword123'
 * };
 * const registrationResult = await saveUser(userData);
 * console.log(registrationResult);
 */
import { User } from "../../../models/user.js";
import { searchEmail } from "./searchEmail.js";
import { encrypt } from "./bcryptUtils.js";

/**
 * Saves user registration data to the database after validation and encryption.
 *
 * @param {Object} userData - The object containing user registration data.
 * @returns {Promise<Object>} A promise that resolves to an object containing registration result.
 */
export const saveUser = async (userData) => {
  try { 
    const username = userData.username;
    const email = userData.email;
    const unencryptedPassword = userData.password;

    // Check if email already exists
    const emailExists = await searchEmail(email);
    if (emailExists.isError === true) {
      return {
        isError: false,
        valid: false,
        message: "There was an error while checking if the email existed.",
        userInformation: null,
      };
    }
    if (emailExists.exist === true) {
      return {
        isError: false,
        valid: false,
        message:
          "User registration failed: This email address is already registered.",
        userInformation: null,
      };
    }

    // Encrypt the password
    const password = await encrypt(unencryptedPassword);
    if (password.isError === true) {
      return {
        isError: false,
        valid: false,
        message: "There was an error while encrypting the password.",
        userInformation: null,
      };
    }

    // Create new user object
    const newUser = new User({
      username: username,
      email: email,
      password: password.hash,
    });

    // Save the user to the database
    const savedUser = await newUser.save();
    if (!savedUser) {
      return {
        isError: false,
        valid: false,
        message: "The user could not be registered successfully.",
        userInformation: savedUser,
      };
    }

    // Registration successful
    return {
      isError: false,
      valid: true,
      message: "The user was registered successfully.",
      userInformation: savedUser,
    };
  } catch (error) {
    // Handle unexpected errors
    return {
      isError: true,
      valid: false,
      message: "There was an error while registering the user.",
      userInformation: null,
    };
  }
};
