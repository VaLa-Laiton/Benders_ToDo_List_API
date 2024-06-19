import { User } from "../../../models/user.js";

/**
 * searchEmail.js
 *
 * Searches for a user by email in the database.
 *
 * This file contains a function that queries the database for a user with the specified email.
 * If a user with the email is found, it returns information about the user.
 * If no user is found, it indicates that the email does not exist in the database.
 *
 * @param {string} email - The email address to search for in the database.
 * @returns {Object} An object containing search results.
 * - If a user with the email exists, returns `{ isError: false, exist: true, dataUser: userData }`.
 * - If no user with the email is found, returns `{ isError: false, exist: false, dataUser: null }`.
 * - If an error occurs during the search, returns `{ isError: true, exist: false, dataUser: null }`.
 *
 * @example
 * const userEmail = 'user@example.com';
 * const searchResult = await searchEmail(userEmail);
 * console.log(searchResult);
 */

export const searchEmail = async (email) => {
  try {
    const dataUser = await User.find({ email: email }).exec();
    if (dataUser.length > 0 && dataUser[0].email === email) {
      return {
        isError: false,
        exist: true,
        dataUser: dataUser[0],
      };
    }

    return {
      isError: false,
      exist: false,
      dataUser: null,
    };
  } catch (error) {
    return {
      isError: true,
      exist: false,
      dataUser: null,
    };
  }
};
