import { validateUser } from "../utils/userUtils/validateUser/validateUser.js";
import { User } from "../models/user.js";

/**
 * createUser.js
 *
 * This file is a controller function for creating a new user.
 *
 * Handles a POST request to create a user based on request body data. It validates the user data
 * using the validateUser function from '../utils/validateUser/validateUser.js'.
 *
 * If the user data is valid, it responds with a success message and indicates that the user has been created.
 * If the user data is invalid, it responds with an error message detailing the validation issue.
 * If an error occurs during processing, it responds with a generic error message.
 *
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @returns {Promise<void>} A Promise that resolves once the response is sent.
 *
 * Note: This function currently relies on the validateUser function for user data validation and
 *       requires further implementation to handle actual user creation logic.
 */
export const createUser = async (req, res) => {
  try {
    const userValidResult = validateUser(req.body);

    if (userValidResult.isError === true) {
      return res.status(500).json({
        message: userValidResult.message,
      });
    }

    if (userValidResult.valid === false) {
      return res.status(400).json({
        message: userValidResult.message,
      });
    }

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    await newUser.save();

    return res.status(200).json({
      message: `${userValidResult.message} And user has been successfully created.`,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Sorry, an error has occurred.",
    });
  }
};
