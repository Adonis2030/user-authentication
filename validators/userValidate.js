const { body, validationResult } = require("express-validator");

const userSchemaValidator = [
  // Validate the 'name' field
  body("username").notEmpty().withMessage("Username is required"),
  body("email").isEmail().withMessage("Email is not valid"),
  body("email").notEmpty().withMessage("Email is required"),
  body("password").notEmpty().withMessage("Password is required"),

  // Additional validation rules for other fields
  // ...

  // Check for validation errors
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // Return validation error response
      return res.status(400).json({ err: errors.array() });
    }

    // If validation succeeds, call the next middleware
    next();
  },
];

const emailParamValidator = [
  // Validate the 'email' field
  // Additional validation rules for other fields
  // ...

  body("email").isEmail().withMessage("Email is not valid"),
  body("email").notEmpty().withMessage("Email is required"),
  body("password").notEmpty().withMessage("Password is required"),

  // Check for validation errors
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Return validation error response
      return res.status(400).json({ err: errors.array() });
    }

    // If validation succeeds, call the next middleware
    next();
  },
];

module.exports = {
  userSchemaValidator,
  emailParamValidator,
};
