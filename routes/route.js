const express = require("express");
const router = express.Router();
const { userController } = require("../controllers");
const { validator } = require("../validators");

/**
 * @desc    Get all users
 * @route   GET /users
 * @output  {data: [{username: string, email: string, password: string}], status: string}
 * @access  Public
 */
router.get("/all", userController.getAllUsers);

/**
 * @desc    Add a new user
 * @route   POST /users
 * @body    {username: string, email: string, password: string}
 * @output  {data: {username: string, email: string, password: string}, status: string},
 * @access  Public
 */
router.post("/signup", validator.userSchemaValidator, userController.signUp);

/**
 * @desc    Get a user by username
 * @route   GET /users/:username
 * @params  username: string
 * @output  {data: {username: string, email: string, password: string}, status: string}
 * @access  Public
 */
router.get(
  "/login/:username",
  validator.usernameParamValidator,
  userController.logIn
);

module.exports = router;
