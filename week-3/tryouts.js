const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require("zod");


const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);
/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */
function signJwt(username, password) {
    // Your code here

    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    if (!usernameResponse.success || !passwordResponse.success) {
        return null;
    }

    const signature = jwt.sign({ username }, jwtpassword);
    return signature;

}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
    // Your code here
    try{
    const verify = jwt.verify(token,jwtPassword);
    return "valid";

    }catch{
        return "invalid";
    }
}

const response = verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFsdWlzZGdmbGFAZ21haWwuY29tIiwiaWF0IjoxNzA5NDg1MjMzfQ.WlNpSbvBB_7lp6cKG1jM7RpABpEsn82febrshSubsJQ");
console.log(response);
