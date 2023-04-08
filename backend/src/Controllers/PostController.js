// This is main controller of user it contain all router methods and export that router.
const express = require("express");

// router to perform all router methods
const router = express.Router();

// importing post model and Athentication middleware.
// Athenticate middleware will check if the request is getting from genuine user
// Athentication is done for security purpose
const Athenticate = require("../Middlewares/Athenticate.middleware");
const PostModel = require("../Models/Posts.model");

// post '/' route is for registering new user
router.post("/", Athenticate, async (req, res) => {
  try {
    const post = await PostModel.create({ ...req.body, user_id: req.user._id });

    console.log(`==> new post by ${req.user._id}`);

    res.status(202).send({ error: false, message: "posted successfully" });
  } catch (error) {
    console.log("ERROR: While posting new post", error.message);
    res
      .status(400)
      .send({ error: true, message: "Bad request. Try to post again" });
  }
});

// get '/user' route is for getting post of a perticular user.
router.get("/user", Athenticate, async (req, res) => {
  try {
    const post = await PostModel.find({ user_id: req.user._id });

    console.log(`==> ${post.user_id} is getting it's all posts`);

    res
      .status(200)
      .send({ error: false, message: "Post got successfully", post });
  } catch (error) {
    console.log("ERROR: While getting all post of user", error.message);
    res.status(400).send({ error: true, message: "Pad request" });
  }
});

// get '/all' route is for getting all posts.
router.get("/all", Athenticate, async (req, res) => {
  try {
    const post = await PostModel.find().sort({ createdAt: -1 });

    console.log(`==> Getting all posts`);

    res
      .status(200)
      .send({ error: false, message: "Post got successfully", post });
  } catch (error) {
    console.log("ERROR: While getting all post", error.message);
    res.status(400).send({ error: true, message: "Bad request" });
  }
});

// get '/:id' route is for getting post with use of post id.
router.get("/:id", Athenticate, async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);

    console.log(`==> ${post.user_id} is getting ${req.params.id} post`);

    res
      .status(200)
      .send({ error: false, message: "Post got successfully", post });
  } catch (error) {
    console.log("ERROR: While getting post by post_id", error.message);
    res.status(400).send({ error: true, message: "Bad request" });
  }
});

// put '/:id' route is for updating post with use of post id.
router.put("/:id", Athenticate, async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);

    if (!post) {
      console.log(`==> Post not found with id ${req.params.id}`);
      res.status(400).send({ error: true, message: "Post not found" });
    }

    const updatedPost = await PostModel.findByIdAndUpdate(req.params.id, {
      $set: {
        content: req.body.content || post.content,
      },
    });

    console.log(`==> ${post.user_id} updated ${req.params.id} post`);

    res.status(200).send({
      error: false,
      message: "Post updated successfully",
      updatedPost,
    });
  } catch (error) {
    console.log("ERROR: While updating post by post_id", error.message);
    res.status(400).send({ error: true, message: "Bad request." });
  }
});

// delete '/:id' route is for deleting post with use of post id.
router.delete("/:id", Athenticate, async (req, res) => {
  try {
    const post = await PostModel.findByIdAndDelete(req.params.id);

    console.log(`==> ${req.user._id} deleted ${req.params.id} post`);

    res.status(200).send({
      error: false,
      message: "Post deleted successfully",
    });
  } catch (error) {
    console.log("ERROR: While deleting post by post_id", error.message);
    res.status(400).send({ error: true, message: "Bad request." });
  }
});

// post '/:id/like' route is for liking post with use of post id.
router.post("/:id/like", Athenticate, async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);
    if (!post) {
      return res.status(404).send({
        error: true,
        message: "Post not found",
      });
    }
    post.likes++;
    const updatedPost = await post.save();
    res.status(200).send({
      error: false,
      message: "Post Liked successfully",
      likes: updatedPost.likes,
    });
  } catch (error) {
    console.log("ERROR: While liking post by post_id", error.message);
    res.status(400).send({ error: true, message: "Bad request." });
  }
});

// post '/:id/unlike' route is for unliking post with use of post id.
router.post("/:id/unlike", Athenticate, async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);
    if (!post) {
      return res.status(404).send({ error: true, message: "Post not found" });
    }
    if (post.likes > 0) {
      post.likes--;
    }
    const updatedPost = await post.save();

    res.status(200).send({
      error: false,
      message: "Post unliked successfully",
      likes: updatedPost.likes,
    });
  } catch (error) {
    console.log("ERROR: While unliking post by post_id", error.message);
    res.status(400).send({ error: true, message: "Bad request." });
  }
});

module.exports = router;
