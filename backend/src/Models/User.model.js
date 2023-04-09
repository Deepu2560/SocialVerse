// importing mongoose and bcryptjs liberaries
// bcryptjs is used to encrypt user's password for security purpose.
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// user schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 50,
    },
    bio: {
      type: String,
      required: false,
      minlength: 0,
      maxlength: 200,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (value) => {
          // Validate email format
          const emailRegex = /\S+@\S+\.\S+/;
          return emailRegex.test(value);
        },
        message: "Please check email or password",
      },
    },
    password: { type: String, required: true, minlength: 8 },
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
