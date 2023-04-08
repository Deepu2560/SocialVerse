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
} = require("./User.crud");

// post '/' route is for registering new user
router.post("/", registerUser);

// get '/:id' route is for login of user.
// In login process we are using user's email and password and check user exist with same password or not
router.get("/", loginUser);

// put '/:id' is to update user's data
// In update process user can update only it's name and bio
router.put("/:id", Athenticate, updateUser);

// delete '/:id' route is for deleting of user.
router.delete("/:id", Athenticate, deleteUser);

// get '/:id' route is for getting user data by there id
// will not send user email and password for security purpose
router.get("/:id", Athenticate, async (req, res) => {
  try {
    const user = await UserModel.findOne(req.params.id);

    if (!user)
      return res.status(404).send({
        error: true,
        message: "User not found.",
      });

    console.log(`==> ${req.params.id} data send successfully`);

    res.status(200).send({
      error: false,
      data: {
        name: user.name,
        bio: user.bio,
        username: user.username,
        profilePic: user.profilePic,
      },
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
});

module.exports = router;
