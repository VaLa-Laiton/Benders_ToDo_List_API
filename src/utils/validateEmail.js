/**
 * Validates an email address based on specified criteria.
 *
 * The function checks if the email meets the following criteria:
 * 1. The email has a valid format.
 * 2. The length of the email is not excessive (up to 254 characters).
 * 3. The email contains only valid characters.
 * 4. The email domain is not in the list of prohibited domains.
 *
 * @param {string} email - The email address to be validated.
 * @returns {Object} An object containing a boolean `valid` and a `message` string.
 * - `valid`: Indicates if the email is valid (true) or not (false).
 * - `message`: Provides a reason why the email is invalid, or states that it is valid.
 *
 * @example
 * // Valid email
 * const result = validateEmail('example@example.com');
 * console.log(result); // { valid: true, message: 'Email is valid.' }
 *
 * @example
 * // Invalid email (invalid format)
 * const result = validateEmail('invalid-email');
 * console.log(result); // { valid: false, message: 'Email format is invalid.' }
 *
 * @example
 * // Invalid email (too long)
 * const result = validateEmail('a'.repeat(255) + '@example.com');
 * console.log(result); // { valid: false, message: 'Email must not exceed 254 characters.' }
 *
 * @example
 * // Invalid email (prohibited domain)
 * const result = validateEmail('user@prohibited.com');
 * console.log(result); // { valid: false, message: 'Email domain is not allowed.' }
 */
const validateEmail = (email) => {
    const maxLength = 254;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const prohibitedDomains = new Set([
      "mailinator.com", "10minutemail.com", "guerrillamail.com", "yopmail.com",
      "dispostable.com", "trashmail.com", "tempmail.com", "getairmail.com",
      "mintemail.com", "maildrop.cc", "fakeinbox.com", "temp-mail.org",
      "emailondeck.com", "throwawaymail.com", "mailcatch.com", "mytrashmail.com",
      "getnada.com", "sharklasers.com", "spamgourmet.com", "spamexperts.com",
      "spamfree24.org", "mohmal.com", "mailnesia.com", "emkei.cz",
      "anonymbox.com", "maildrop.cf", "maildrop.ga", "maildrop.ml",
      "maildrop.tk", "example.com", "example.net", "example.org",
      "example.co", "example.xyz", "prohibited.com", "prohibited.net",
      "prohibited.org", "prohibited.co", "prohibited.xyz",
    ]);
  
    if (email.length === 0) {
      return { valid: false, message: "Email cannot be empty." };
    }
  
    if (email.length > maxLength) {
      return { valid: false, message: `Email must not exceed ${maxLength} characters.` };
    }
  
    if (!regex.test(email)) {
      return { valid: false, message: "Email format is invalid." };
    }
  
    const emailParts = email.split("@");
    if (emailParts.length !== 2) {
      return { valid: false, message: "Email format is invalid." };
    }
  
    const emailDomain = emailParts[1].toLowerCase();
    if (prohibitedDomains.has(emailDomain)) {
      return { valid: false, message: "Email domain is not allowed." };
    }
  
    return { valid: true, message: "Email is valid." };
  };
  