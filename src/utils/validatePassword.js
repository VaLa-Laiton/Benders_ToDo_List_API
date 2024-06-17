/**
 * Validates a password based on specified criteria.
 *
 * The function checks if the password meets the following criteria:
 * 1. The length of the password is between 8 and 100 characters.
 * 2. The password contains at least one uppercase letter, one lowercase letter,
 *    one number, and one special character from the set: !@#$%^&*()-_+=[]{}|;:,.<>?.
 *
 * @param {string} password - The password to be validated.
 * @returns {Object} An object containing a boolean `valid` and a `message` string.
 * - `valid`: Indicates if the password is valid (true) or not (false).
 * - `message`: Provides a reason why the password is invalid, or states that it is valid.
 *
 * @example
 * // Valid password
 * const result = validatePassword('SecurePassword123!');
 * console.log(result); // { valid: true, message: 'Password is valid.' }
 *
 * @example
 * // Invalid password (too short)
 * const result = validatePassword('Weak123!');
 * console.log(result); // { valid: false, message: 'Password must be between 8 and 100 characters.' }
 *
 * @example
 * // Invalid password (missing special character)
 * const result = validatePassword('MissingSpecial123');
 * console.log(result); // { valid: false, message: 'Password must contain at least one special character.' }
 *
 * @example
 * // Invalid password (weak, only letters)
 * const result = validatePassword('WeakPassword');
 * console.log(result); // { valid: false, message: 'Password is too weak.' }
 */
const validatePassword = (password) => {
    const minLength = 8;
    const maxLength = 100;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_+=\[\]{}|;:,.<>?]).{8,100}$/;

    if (password.length < minLength || password.length > maxLength) {
        return { valid: false, message: `Password must be between ${minLength} and ${maxLength} characters.` };
    }

    if (!regex.test(password)) {
        return { valid: false, message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.' };
    }

    return { valid: true, message: 'Password is valid.' };
};
