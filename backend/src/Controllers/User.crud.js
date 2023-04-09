// this file contain crud operation for a user data
// importing usermodel.
const UserModel = require("../Models/User.model");

// register function for registering new user to database.
const registerUser = async (req, res) => {
  try {
    let user = await UserModel.findOne({ email: req.body.email });

    if (user)
      return res.status(400).send({
        error: true,
        message: "Please check email and password",
      });

    user = await UserModel.create(req.body);

    console.log(`==> ${req.body._id} is registered.`);

    return res
      .status(201)
      .send({ error: false, user, message: "User Registered successfully" });
  } catch (error) {
    console.log(
      "=>> Server error while registering new user. ERROR:",
      error.message,
    );
    return res.status(400).send({
      error: true,
      message: `Bad Request. ERROR: ${error.message}`,
    });
  }
};

// login function for checking user credential for login.
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

    console.log(`==> ${req.body.email} is logedin`);

    res.status(200).send({
      error: false,
      user,
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

// getData function for getting data of user with use of id
const getData = async (req, res) => {
  try {
    const user =
      req.params.id !== "all"
        ? await UserModel.findById(req.params.id)
        : await UserModel.find();

    if (!user)
      return res.status(404).send({
        error: true,
        message: "User not found.",
      });

    console.log(`==> ${req.params.id} data send successfully`);

    res.status(200).send({
      error: false,
      user,
      message: "User data sent successfully",
    });
  } catch (error) {
    console.log(
      "=>> Server error while sending user data of perticular. ERROR:",
      error.message,
    );
    return res.status(400).send({
      error: true,
      message: `Bad request. Try Again`,
    });
  }
};

// updateUser function for updating user data this only update name and bio of user.
const updateUser = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);

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

    console.log(`==> ${req.params.id} data updated successfully`);

    res.status(200).send({
      error: false,
      user: userUpdated,
      message: "User Data updated successfully",
    });
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

// deleteUser function for deleting user data.
const deleteUser = async (req, res) => {
  try {
    userDelete = await UserModel.findByIdAndDelete(req.params.id);

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
module.exports = { registerUser, loginUser, getData, updateUser, deleteUser };
