// In this file we are creating schema and model for posts.
const mongoose = require("mongoose");

// post schema. main document will contain: post_id, user_id, content, likes, created_date and updated_date
const postSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    content: { type: String, required: true, minlength: 1, maxlength: 300 },
    likes: { type: Number, required: false, min: 0, default: 0 },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

// exporting posts model
module.exports = mongoose.model("posts", postSchema);
