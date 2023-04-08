// this controller for get analytics data
const express = require("express");

const router = express.Router();

// importing user model
const UserModel = require("../Models/User.model");
const PostModel = require("../Models/Posts.model");

// Retrieve the total number of users
router.get("/users", async (req, res) => {
  try {
    const totalUsers = await UserModel.countDocuments();

    console.log("Getting the count of total number of users");

    res.status(200).send({
      error: false,
      message: "Got total number of users",
      data: totalUsers,
    });
  } catch (err) {
    console.log(
      "=>> ERROR: while get analytics of total number of users:",
      err.message,
    );
    res.status(400).send({ error: true, message: "Bad request" });
  }
});

// Retrieve the top 5 most active users based on number of posts
router.get("/users/top-active", async (req, res) => {
  try {
    const topActiveUsers = await UserModel.aggregate([
      {
        $lookup: {
          from: "posts",
          localField: "_id",
          foreignField: "user_id",
          as: "posts",
        },
      },
      {
        $project: {
          _id: 1,
          name: 1,
          email: 1,
          bio: 1,
          postCount: { $size: "$posts" },
        },
      },
      { $sort: { postCount: -1 } },
      { $limit: 5 },
    ]);

    console.log("=>> Getting analytics of top 5 active users");

    res.status(200).send({
      error: false,
      message: "Got top 5 active users",
      data: topActiveUsers,
    });
  } catch (err) {
    console.log(
      "Error: while getting the top 5 active users analytics:",
      err.message,
    );
    res.status(400).send({ error: true, message: "Bad request" });
  }
});

// Retrieve the total number of posts
router.get("/analytics/posts", async (req, res) => {
  try {
    const totalPosts = await PostModel.countDocuments();

    console.log("Getting the count of total number of posts");

    res.status(200).send({
      error: false,
      message: "Got total number of posts",
      data: totalPosts,
    });
  } catch (err) {
    console.log(
      "=>> ERROR: while get analytics of total number of posts:",
      err.message,
    );
    res.status(400).send({ error: true, message: "Bad request" });
  }
});

// Retrieve the top 5 most liked posts
router.get("/analytics/posts/top-liked", async (req, res) => {
  try {
    const topLikedPosts = await PostModel.find().sort({ likes: -1 }).limit(5);

    console.log("=>> Getting analytics of top 5 active users");

    res.status(200).send({
      error: false,
      message: "Got top 5 active users",
      data: topLikedPosts,
    });
  } catch (err) {
    console.log(
      "Error: while getting the top 5 liked posts analytics:",
      err.message,
    );
    res.status(400).send({ error: true, message: "Bad request" });
  }
});

module.exports = router;
