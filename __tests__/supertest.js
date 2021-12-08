const request = require("supertest");

const server = "http://localhost:3000";

/**
 * Read the docs! https://www.npmjs.com/package/supertest
 */

describe("Route integration", () => {
  describe("/", () => {
    describe("GET", () => {
      // Note that we return the evaluation of `request` here! It evaluates to
      // a promise, so Jest knows not to say this test passes until that
      // promise resolves. See https://jestjs.io/docs/en/asynchronous
      it("responds with 200 status and text/html content type", () => {
        return request(server)
          .get("/")
          .expect("Content-Type", /text\/html/)
          .expect(200);
      });
    });
  });

  describe("/api/login", () => {
    describe("GET", () => {
      it("responds with 200 status and application/json content type", () => {
        return request(server)
          .get("/api/login")
          .expect("Content-Type", /json/)
          .expect(200);
      });

      it('parses an object from the response to login', () => {
        return request(server)
          .get("/api/login")
          .expect("Content-Type", /json/)
          .expect(200)
          .then((res) => {
            expect(typeof res.body).toEqual("object");
            //{ userExists: false, userAdded: false, userID: null }
            expect(res.body).toHaveProperty('userExists');
            expect(res.body).toHaveProperty('userAdded');
            expect(res.body).toHaveProperty('userID');
          });
      });
    });
  });


  //test the route, then check the json object on the response
  describe("/api/getAllEntries", () => {
    describe("GET", () => {
      it("responds with 200 status and application/json content type", () => {
        return request(server)
          .get("/api/getAllEntries")
          .query({userID: 1})
          .expect("Content-Type", /json/)
          .expect(200);
      });

      it('parses an array from the response to getAllEntries', () => {
        return request(server)
          .get("/api/getAllEntries")
          .query({userID: 1})
          .expect("Content-Type", /json/)
          .expect(200)
          .then((res) => {
            expect(Array.isArray(res.body)).toEqual(true);
          });
      });
    });
  });

  //post test goes here
  describe("/api/signup", () => {
    describe("POST", () => {
      it("responds with 200 status and application/json content type", () => {
        return request(server)
          .post("/api/signup")
          .query({username: "Regis", passwordUser: "tarotcards"})
          .expect("Content-Type", /text\/html/)
          .expect(200);
      });

      it('parses an object from the response to signup', () => {
        return request(server)
          .post("/api/signup")
          .query({username: "Regis", passwordUser: "tarotcards"})
          .expect("Content-Type", /text\/html/)
          .expect(200)
          .then((res) => {
            expect(typeof res.body).toEqual("object"); //update when we implement signup
          });
      });
    });
  });

  //put test goes here
  describe("/api/addEntry", () => {
    describe("POST", () => {
      it("responds with 200 status and application/json content type", () => {
        return request(server)
          .post("/api/addEntry")
          .query({urlEntry: "www.hackme.com", userID: 3, passwordEntry: "hunter2"})
        //   .expect("Content-Type", /json/)
          .expect(200);
      });

      it('parses an array from the response to login', () => {
        return request(server)
          .post("/api/addEntry")
          .query({urlEntry: "www.hackme.com", userID: 3, passwordEntry: "hunter2"})
        //   .expect("Content-Type", /json/)
          .expect(200)
          .then((res) => {
            expect(isArray(res.body)).toEqual(true);
          });
      });
    });
  });

  //delete test goes here
  describe("/api/deleteEntry", () => {
    describe("DELETE", () => {
      it("responds with 200 status and application/json content type", () => {
        return request(server)
          .delete("/api/deleteEntry")
        //   .expect("Content-Type", /json/)
          .expect(200);
      });
    });
  });
});
