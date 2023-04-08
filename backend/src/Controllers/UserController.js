// This is main controller of user it contain all router methods and export that router.
const express = require("express");

// router to perform all router methods
const router = express.Router();

// importing all user crud operations and Athentication middleware.
// Athenticate middleware will check if the request is getting from genuine user
// Athentication is done for security purpose
const Athenticate = require("../Middlewares/Athenticate.middleware");
const {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
  getData,
} = require("./User.crud");

// post '/' route is for registering new user
router.post("/", registerUser);

// post '/:id' route is for login of user.
// In login process we are using user's email and password and check user exist with same password or not
router.post("/login", loginUser);

// put '/:id' is to update user's data
// In update process user can update only it's name and bio
router.put("/:id", Athenticate, updateUser);

// delete '/:id' route is for deleting of user.
router.delete("/:id", Athenticate, deleteUser);

// get '/:id' route is for getting user data by there id
// will not send user email and password for security purpose
router.get("/:id", Athenticate, getData);

module.exports = router;
