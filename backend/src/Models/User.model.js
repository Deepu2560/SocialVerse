// importing mongoose and bcryptjs liberaries
// bcryptjs is used to encrypt user's password for security purpose.
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// user schema
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    bio: { type: String, required: true },
    profilePic: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

// encrypting user password
// after this process encrypted password new password will replace user password and in document.
userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();

  var hash = bcrypt.hashSync(this.password, 8);
  this.password = hash;
  return next();
});

// checking user password while login
userSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

// exporting user model
module.exports = mongoose.model("users", userSchema);
