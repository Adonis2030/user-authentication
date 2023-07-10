const express = require("express");
const router = express.Router();
const { userController } = require("../controllers");
const { validator } = require("../validators");

/**
 * @desc    Get all users
 * @route   GET /users
 * @output  {data: [{username: string}]}
 * @access  Public
 */
router.get("/users", userController.getAllUsers);

/**
 * @desc    Add a new user
 * @route   POST /users
 * @body    {username: string, email: string, password: string}
 * @output  {data: {username: string, email: string, password: string}, status: string},
 * @access  Public
 */
router.post("/signup", validator.userSchemaValidator, userController.signUp);

/**
 * @desc    Get a user by email and password
 * @route   GET /users/:email&:password
 * @params  email: string
 * @output  {data: {__id: string, username: string, email: string, password: string}, status: string}
 * @access  Public
 */
router.post("/login", validator.emailParamValidator, userController.logIn);

module.exports = router;
