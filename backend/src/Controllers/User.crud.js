// this file contain crud operation for a user data
// importing jsonwebtoken and user model.
const jwt = require("jsonwebtoken");

const UserModel = require("../Models/User.model");

// newToken for assigning new token to user
// JWT key is used to assign token to user and when required user detail by token this key is required
// So, this is important hide this jsonwebtoken key
const newToken = (user) => {
  return jwt.sign({ user }, `${process.env.JWT_KEY}`);
};

// register function for /auth/register route and registering new user to database
const registerUser = async (req, res) => {
  try {
    let user = await UserModel.findOne({ email: req.body.email });

    if (user)
      return res.status(400).send({
        error: true,
        message: "Please check email and password",
      });

    user = await UserModel.create(req.body);

    const token = newToken(user);

    console.log(`==> ${req.email} is registered.`);

    return res
      .status(201)
      .send({ error: true, token, message: "User Registered successfully" });
  } catch (error) {
    console.log(
      "=>> Server error while registering new user. ERROR:",
      error.message,
    );
    return res.status(400).send({
      error: true,
      message: `=>> Server error while registering new user. ERROR: ${error.message}`,
    });
  }
};

// login function for /auth/login route and checking user credential for login
const loginUser = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user)
      return res.status(404).send({
        error: true,
        message: "Please check email and password",
      });

    let match = user.checkPassword(req.body.password);

    if (!match)
      return res.status(404).send({
        error: true,
        message: "Please check email and password",
      });

    const token = newToken(user);

    console.log(`==> ${req.body.email} is logedin`);

    res.status(200).send({
      error: false,
      token,
      data: {
        username: user.username,
        profilePic: user.profilePic,
        bio: user.bio,
        name: user.name,
      },
      message: "User successfully logedin",
    });
  } catch (error) {
    console.log(
      "=>> Server error while login proccess of user. ERROR:",
      error.message,
    );
    return res.status(400).send({
      error: true,
      message: `=>> Server error while login proccess of user. ERROR: ${error.message}`,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await UserModel.findOne(req.params.id);

    if (!user)
      return res.status(404).send({
        error: true,
        message: "User not found. Please login again.",
      });

    const userUpdated = await UserModel.findByIdAndUpdate(req.params.id, {
      $set: {
        name: req.body.name || user.name,
        bio: req.body.bio || user.bio,
      },
    });

    const token = newToken(user);

    console.log(`==> ${req.params.id} data updated successfully`);

    res
      .status(200)
      .send({ error: false, token, message: "User Data updated successfully" });
  } catch (error) {
    console.log(
      "=>> Server error while updating data proccess of user. ERROR:",
      error.message,
    );
    return res.status(400).send({
      error: true,
      message: `=>> Server error while updating data proccess of user. ERROR: ${error.message}`,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await UserModel.findOne(req.params.id);

    if (!user)
      return res.status(404).send({
        error: true,
        message: "User not found. Please login again.",
      });

    user = await UserModel.findByIdAndDelete(req.params.id);

    console.log(`==> ${req.params.id} deleted successfully`);

    res
      .status(200)
      .send({ error: false, message: "User deleted successfully" });
  } catch (error) {
    console.log(
      "=>> Server error while deleting data proccess of user. ERROR:",
      error.message,
    );
    return res.status(400).send({
      error: true,
      message: `=>> Server error while deleting data proccess of user. ERROR: ${error.message}`,
    });
  }
};

// exporting both register and login function
module.exports = { registerUser, loginUser, updateUser, deleteUser };
