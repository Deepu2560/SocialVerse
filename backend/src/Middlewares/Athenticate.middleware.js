// This file is used to athenticate and check user exist or not and token is true or not
// jwtwebtoken to check asigned token of user for header
const jwt = require("jsonwebtoken");

// verify assigned user for that token function
// In this function too jsonwebtoken takes an key to get user details.
const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, `${process.env.JWT_KEY}`, (error, user) => {
      if (error) return reject(error);

      resolve(user);
    });
  });
};

// main authenticate function it take req.header.authentication and verify token and return user
module.exports = async (req, res, next) => {
  if (!req.headers.authorization)
    return res
      .status(400)
      .send({ error: true, message: "Token not provided or Invalid" });

  const receivedToken = req.headers.authorization.split(" ");

  if (receivedToken[0] != "Bearer")
    return res
      .status(400)
      .send({ error: true, message: "Token not provided or Invalid" });

  const token = receivedToken[1];

  let user;

  try {
    user = await verifyToken(token);
  } catch (error) {
    console.log("Athenticaiton Error:", error);
    return res
      .send(400)
      .send({ error: true, message: `Athenticaiton Error: ${error.message}` });
  }

  if (!user.user) {
    return res.status(404).send({ error: true, message: "User not found" });
  }

  req.user = user.user;

  return next();
};
