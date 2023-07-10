// const { userService } = require("../services");

// // Controller function to get all users
// async function getAllUsers(req, res) {
//   try {
//     return res.status(200).json(await userService.getAllUsers());
//   } catch (err) {
//     return res.status(500).json({ err });
//   }
// }

// // Controller function to get a user by their username
// async function logIn(req, res) {
//   try {
//     let result = await userService.logIn(req.params.username);
//     if (result.data.length === 0) {
//       return res.status(400).json({ err: "No corresponding user" });
//     } else {
//       return res.status(200).json(result);
//     }
//   } catch (err) {
//     return res.status(500).json({ err });
//   }
// }

// // Controller function to register new user
// async function signUp(req, res) {
//   try {
//     let result = await userService.signUp(req.body);
//     if (result.status === "error") {
//       return res
//         .status(400)
//         .json({ err: "User info already exist! Please try to login" });
//     } else {
//       return res.status(200).json(result);
//     }
//   } catch (err) {
//     return res.status(500).json({ err });
//   }
// }

// // Export the controller functions
// module.exports = {
//   getAllUsers,
//   logIn,
//   signUp,
// };

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
    const { email, password } = req.query;
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
