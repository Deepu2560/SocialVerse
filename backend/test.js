const chai = require("chai");
const request = require("supertest");
const app = require("./server");
const expect = chai.expect;
var user_id;
var post_id;

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
          console.log(res.body._id);
          expect(res).to.have.status(201);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("name").equal("John sde");
          expect(res.body).to.have.property("bio").equal("Software Engineer");
          expect(res.body).to.have.property("email").equal("johnsde@gmail.com");
          expect(res.body).to.have.property("password").equal("johnsde1");
        });
    });
  });

  //   // Test case for retrieving a user by id
  //   describe("GET /users/:id", () => {
  //     it("should retrieve a user by id", (done) => {
  //       // Assuming a user with id 1 exists in the database
  //       chai
  //         .request(app)
  //         .get("/users/6432b9087cd8e0619bba9a6e")
  //         .end((err, res) => {
  //           expect(res).to.have.status(200);
  //           expect(res.body).to.be.an("object");
  //           expect(res.body).to.have.property("id").equal(1);
  //           expect(res.body).to.have.property("name");
  //           expect(res.body).to.have.property("bio");
  //           done();
  //         });
  //     });
  //   });

  //   // Test case for updating a user's name or bio by id
  //   describe("PUT /users/:id", () => {
  //     it("should update a user's name or bio by id", (done) => {
  //       // Assuming a user with id 1 exists in the database
  //       chai
  //         .request(app)
  //         .put("/users/6432b9087cd8e0619bba9a6e")
  //         .send({ name: "John Doe" })
  //         .end((err, res) => {
  //           expect(res).to.have.status(200);
  //           expect(res.body).to.be.an("object");
  //           expect(res.body).to.have.property("id").equal(1);
  //           expect(res.body).to.have.property("name").equal("John Doe");
  //           expect(res.body).to.have.property("bio");
  //           done();
  //         });
  //     });
  //   });

  //   // Test case for deleting a user by id
  //   describe("DELETE /users/:id", () => {
  //     it("should delete a user by id", (done) => {
  //       // Assuming a user with id 1 exists in the database
  //       chai
  //         .request(app)
  //         .delete("/users/6432b9087cd8e0619bba9a6e")
  //         .end((err, res) => {
  //           expect(res).to.have.status(204);
  //           done();
  //         });
  //     });
  //   });
});
