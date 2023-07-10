const { User } = require("../models");

/**
 * Get all users
 * @returns {Object} Response object with data and status
 */
async function getAllUsers() {
  const users = await User.find();

  return {
    data: users,
    status: "success",
  };
}

/**
 * Logging in by user email and password
 * @param {string} email - The email of the user to retrieve
 * @param {string} password - The password of the user to retrieve
 * @returns {Object} Response object with data and status
 */
async function logIn(email, password) {
  const user = await User.findOne({ email });
  console.log("user>>", password, user.password);
  if (user) {
    if (user.password === password) {
      return {
        data: user,
        status: "success",
      };
    } else
      return {
        data: null,
        error: "wrong password",
        status: "error",
      };
  } else {
    return {
      data: null,
      error: "user not exists",
      status: "error",
    };
  }
}

/**
 * Add a new user
 * @param {Object} user - The user object to add
 * @returns {Object} Response object with status
 */
async function signUp(user) {
  const isExisted = await User.findOne({ email: user.email });
  if (isExisted) {
    return {
      data: {},
      status: "error",
    };
  } else {
    const newUser = new User(user);
    newUser.save();
    return {
      data: user,
      status: "success",
    };
  }
}

module.exports = {
  getAllUsers,
  logIn,
  signUp,
};
