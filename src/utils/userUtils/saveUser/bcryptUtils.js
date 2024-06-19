/**
 * bcryptUtils.js
 *
 * Utility functions for encrypting and comparing passwords using bcrypt.
 *
 * This file provides functions to securely encrypt passwords and compare them
 * with previously hashed passwords using bcrypt hashing algorithm.
 *
 * @param {string} password - The password to be encrypted or compared.
 * @param {string} hash - The hash to compare the password against.
 * @returns {Object} An object containing operation results.
 */

import { BCRYPT_SALT_ROUNDS } from "../../../config/config.js";
import bcrypt from "bcrypt";

/**
 * Encrypts a password using bcrypt hash function.
 *
 * @param {string} password - The password to be encrypted.
 * @returns {Promise<Object>} A promise that resolves to an object containing encryption result.
 * - If encryption succeeds, returns `{ isError: false, hash: string }`.
 * - If an error occurs during encryption, returns `{ isError: true, hash: null }`.
 *
 * @example
 * const password = 'securePassword123';
 * const hashedPassword = await encrypt(password);
 * console.log(hashedPassword); // { isError: false, hash: '$2b$12$yQ2EmiIhDyP.7nV.PmoCRezxFIj6n.uY59Tg7J8nN39uWuUJ8JNWC' }
 */
export const encrypt = async (password) => {
  try {
    const salt = await bcrypt.genSalt(parseInt(BCRYPT_SALT_ROUNDS));
    const hash = await bcrypt.hash(password, salt);
    return { isError: false, hash: hash };
  } catch (error) {
    console.error(error);
    return { isError: true, hash: null };
  }
};

/**
 * Compares a password with a bcrypt hash to determine if they match.
 *
 * @param {string} password - The password to compare.
 * @param {string} hash - The bcrypt hash to compare against.
 * @returns {Promise<Object>} A promise that resolves to an object containing comparison result.
 * - If passwords match, returns `{ isError: false, passwordsMatch: true }`.
 * - If passwords do not match or an error occurs during comparison, returns `{ isError: true, passwordsMatch: false }`.
 *
 * @example
 * const password = 'securePassword123';
 * const hashedPassword = '$2b$12$yQ2EmiIhDyP.7nV.PmoCRezxFIj6n.uY59Tg7J8nN39uWuUJ8JNWC';
 * const isMatch = await compare(password, hashedPassword);
 * console.log(isMatch); // { isError: false, passwordsMatch: true }
 */
export const compare = async (password, hash) => {
  try {
    const passwordsMatch = await bcrypt.compare(password, hash);
    return { isError: false, passwordsMatch: passwordsMatch };
  } catch (error) {
    return { isError: true, passwordsMatch: false };
  }
};
