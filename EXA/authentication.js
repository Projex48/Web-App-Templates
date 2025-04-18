const argon2 = require('argon2');

/**
 * Authentication methods for Node.js.
 * @author Tristan Rush
 */

/**
 * Securely hashes a password to be stored for user authentication.
 * @param {string} password The password to be hashed.
 * @return {Promise<string>} The password hash if successful.
 * @throws {Error} If hashing fails.
 */
async function hashPassword(password) {
    return await argon2.hash(password);
}

/**
 * Verifies the plaintext password against the password hash.
 * @param {string} hashedPassword The password hash for the user.
 * @param {string} plainPassword The plaintext password the user entered.
 * @return {Promise<boolean>} True if successfully verified.
 * @throws {Error} If verification fails.
 */
async function verifyPasswordHash(hashedPassword, plainPassword) {
    return await argon2.verify(hashedPassword, plainPassword);
}

export {hashPassword, verifyPasswordHash};