/**
 * Validates a username based on specified criteria.
 *
 * The function checks if the username meets the following criteria:
 * 1. The length of the username is between 3 and 15 characters.
 * 2. The username contains only letters (uppercase and lowercase), numbers, dots, underscores, and hyphens.
 * 3. The username does not contain reserved words such as 'admin', 'root', or 'superuser'.
 * 4. The username does not start or end with a dot, underscore, or hyphen.
 *
 * @param {string} username - The username to be validated.
 * @returns {Object} An object containing a boolean `valid` and a `message` string.
 * - `valid`: Indicates if the username is valid (true) or not (false).
 * - `message`: Provides a reason why the username is invalid, or states that it is valid.
 *
 * @example
 * // Valid username
 * const result = validateUsername('validUser_123');
 * console.log(result); // { valid: true, message: 'Username is valid.' }
 *
 * @example
 * // Invalid username (too short)
 * const result = validateUsername('us');
 * console.log(result); // { valid: false, message: 'Username must be between 3 and 15 characters.' }
 *
 * @example
 * // Invalid username (contains invalid characters)
 * const result = validateUsername('invalid@user');
 * console.log(result); // { valid: false, message: 'Username can only contain letters, numbers, dots, underscores, and hyphens.' }
 *
 * @example
 * // Invalid username (reserved word)
 * const result = validateUsername('admin');
 * console.log(result); // { valid: false, message: 'This username is reserved and cannot be used.' }
 *
 * @example
 * // Invalid username (starts with a special character)
 * const result = validateUsername('.invalidUser');
 * console.log(result); // { valid: false, message: 'Username cannot start or end with a special character.' }
 */
export const validateUsername = (username) => {
    const minLength = 3;
    const maxLength = 15;
    const regex = /^[a-zA-Z0-9._-]+$/;
    const reservedWords = new Set(['admin', 'root', 'superuser']);

    if (username.length < minLength || username.length > maxLength) {
        return { valid: false, message: `Username must be between ${minLength} and ${maxLength} characters.` };
    }

    if (!regex.test(username)) {
        return { valid: false, message: 'Username can only contain letters, numbers, dots, underscores, and hyphens.' };
    }

    if (reservedWords.has(username.toLowerCase())) {
        return { valid: false, message: 'This username is reserved and cannot be used.' };
    }

    if (/^[._-]|[._-]$/.test(username)) {
        return { valid: false, message: 'Username cannot start or end with a special character.' };
    }

    return { valid: true, message: 'Username is valid.' };
};
