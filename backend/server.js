// imported express, dotenv and cors modules.
// configured dotenv module to get varaiables from envirnment variable(env) file.
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// imported connect function. This function connects our backend server to mongodb database
const connect = require("./src/Config/db");

// variable app to use properties of express object
const app = express();

// app.use is used for middleware functions.
// Here we are using it for express.json and cors functions as a middleware for every requests.
app.use(express.json());
app.use(cors());

// importing controllers
const UserController = require("./src/Controllers/UserController");
const PostController = require("./src/Controllers/PostController");
const AnalyticController = require("./src/Controllers/AnalyticsController");

// sending for main route
app.get("/", async (req, res) => {
  try {
    console.log("request for main page");
    res.status(200).send("Hello world");
  } catch (error) {
    console.log("=>> main page error:", error.message);
    res.status(400).status({ error: true, message: "Bad request" });
  }
});

// all routes and controller methods
app.use("/users", UserController);
app.use("/analytics", AnalyticController);
app.use("/posts", PostController);

// app.listen to start server on port. Here port is hidden for better security.
app.listen(process.env.PORT || 3000, async (req, res) => {
  try {
    await connect();
    console.log(`===>>> Server status: started on port ${process.env.PORT}`);
  } catch (error) {
    console.log(`===>>> Server status: stopd with Error = ${error.message}`);
  }
});

module.exports = app;
