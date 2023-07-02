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
 * Get a user by username
 * @param {string} username - The username of the user to retrieve
 * @returns {Object} Response object with data and status
 */
async function logIn(username) {
  const user = await User.findOne({ username });

  return {
    data: user === null ? [] : user,
    status: "success",
  };
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
