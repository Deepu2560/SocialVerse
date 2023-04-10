const chai = require("chai");
const request = require("supertest");
const express = require("express");
const expect = chai.expect;
chai.use(require("sinon-chai"));

const app = express();

// Test cases for User API endpoints
describe("User API endpoints", () => {
  // Test case for creating a new user
  describe("POST /users", () => {
    it("should create a new user", () => {
      request(app)
        .post("/users")
        .send({
          name: "John",
          email: "john@gmail.com",
          bio: "Software Engineer",
          password: "johnsde1",
        })
        .expect(201)
        .then((err, res) => {
          console.log(res);
          expect(res).to.have.status(201);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("name").equal("John sde");
          expect(res.body).to.have.property("bio").equal("Software Engineer");
          expect(res.body).to.have.property("email").equal("johnsde@gmail.com");
          expect(res.body).to.have.property("password").equal("johnsde1");
        });
    });
  });

  // Test case for retrieving a user by id
  describe("GET /users/{id}", () => {
    it("should retrieve a user by id", () => {
      // Assuming a user with id 1 exists in the database
      request(app)
        .get("/users/1")
        .expect(200)
        .then((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("id").equal(1);
          expect(res.body).to.have.property("name");
          expect(res.body).to.have.property("bio");
        });
    });
  });

  // // Test case for updating a user's name or bio by id
  // describe("PUT /users/{id}", () => {
  //   it("should update a user's name or bio by id", () => {
  //     // Assuming a user with id 1 exists in the database
  //     request(app)
  //       .put("/users/1")
  //       .send({ name: "John Doe" })
  //       .expect(200)
  //       .end((err, res) => {
  //         expect(res).to.have.status(200);
  //         expect(res.body).to.be.an("object");
  //         expect(res.body).to.have.property("name").equal("John Doe");
  //         expect(res.body).to.have.property("bio");
  //       });
  //   });
  // });

  // Test case for deleting a user by id
  describe("DELETE /users/{id}", () => {
    it("should delete a user by id", () => {
      // Assuming a user with id 1 exists in the database
      request(app)
        .delete("/users/1")
        .expect(200)
        .then((err, res) => {
          expect(res).to.have.status(200);
        });
    });
  });
});

// Test cases for User API endpoints
describe("Posts API endpoints", () => {
  // Test case for creating a new user
  describe("POST /posts", () => {
    it("should create a new user", () => {
      request(app)
        .post("/posts")
        .send({
          content: "Hello World",
        })
        .expect(201)
        .then((err, res) => {
          console.log(res);
          expect(res).to.have.status(201);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("content");
        });
    });
  });

  // Test case for retrieving a user by id
  describe("GET /posts/{id}", () => {
    it("should retrieve a user by id", () => {
      // Assuming a user with id 1 exists in the database
      request(app)
        .get("/posts/1")
        .expect(200)
        .then((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("id").equal(1);
          expect(res.body).to.have.property("content");
        });
    });
  });

  // // Test case for updating a user's name or bio by id
  // describe("PUT /posts/{id}", () => {
  //   it("should update a post content", () => {
  //     // Assuming a user with id 1 exists in the database
  //     request(app)
  //       .put("/posts/1")
  //       .send({ content: "Updated post." })
  //       .expect(200)
  //       .end((err, res) => {
  //         expect(res.body).to.be.an("object");
  //         expect(res.body).to.have.property("content");
  //       });
  //   });
  // });

  // Test case for deleting a user by id
  describe("DELETE /posts/{id}", () => {
    it("should delete a user by id", () => {
      // Assuming a user with id 1 exists in the database
      request(app)
        .delete("/posts/1")
        .expect(200)
        .then((err, res) => {
          expect(res).to.have.status(200);
        });
    });
  });
});

// Test cases for Analytics API endpoints
describe("Analytics API endpoints", () => {
  // Test case for retrieve total number of users
  describe("GET /analytic/users", () => {
    it("should retrieve total number of users", () => {
      request(app)
        .get("/analytic/users")
        .expect(200)
        .then((err, res) => {
          console.log(res);
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");
        });
    });
  });

  // Test case for retrieve top 5 active user
  describe("GET /analytic/users/top-active", () => {
    it("should retrieve top 5 active user", () => {
      request(app)
        .get("/analytic/users/top-active")
        .expect(200)
        .then((err, res) => {
          console.log(res);
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");
        });
    });
  });

  // Test case for retrieve total number of posts
  describe("GET /analytic/posts", () => {
    it("should retrieve total number of users", () => {
      request(app)
        .get("/analytic/posts")
        .expect(200)
        .then((err, res) => {
          console.log(res);
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");
        });
    });
  });

  // Test case for retrieve top 5 most liked posts
  describe("GET /analytic/posts/top-liked", () => {
    it("should retrieve top 5 most liked posts", () => {
      request(app)
        .get("/analytic/posts/top-liked")
        .expect(200)
        .then((err, res) => {
          console.log(res);
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");
        });
    });
  });
});
