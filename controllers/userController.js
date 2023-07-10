const { userService } = require("../services");

// Controller function to get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    const userNames = users.data.map((user) => user.username);
    return res.status(200).json(userNames);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Controller function to get a user by their username
const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await userService.logIn(email, password);
    if (result.status === "error") {
      return res.status(400).json({ error: "Incorrect email or password" });
    } else {
      return res.status(200).json(result);
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Controller function to register a new user
const signUp = async (req, res) => {
  try {
    const result = await userService.signUp(req.body);

    if (result.status === "error") {
      return res
        .status(400)
        .json({ error: "User info already exists! Please try to login" });
    } else {
      return res.status(200).json(result);
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Export the controller functions
module.exports = {
  getAllUsers,
  logIn,
  signUp,
};
