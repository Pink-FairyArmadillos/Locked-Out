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
            expect(typeof res.locals.userMetadata).toEqual("object");
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
          .expect("Content-Type", /json/)
          .expect(200);
      });

      it('parses an array from the response to getAllEntries', () => {
        return request(server)
          .get("/api/getAllEntries")
          .expect("Content-Type", /json/)
          .expect(200)
          .then((res) => {
            expect(Array.isArray(res.locals.entries)).toEqual(true);
          });
      });
    });
  });

  //post test goes here
  describe("/api/signup", () => {
    describe("POST", () => {
      it("responds with 200 status and application/json content type", () => {
        return request(server)
          .get("/api/signup")
          .expect("Content-Type", /json/)
          .expect(200);
      });

      it('parses an object from the response to signup', () => {
        return request(server)
          .get("/api/signup")
          .expect("Content-Type", /json/)
          .expect(200)
          .then((res) => {
            expect(typeof res.locals.userMetadata).toEqual("object");
          });
      });
    });
  });

  //put test goes here
  describe("/api/addEntry", () => {
    describe("POST", () => {
      it("responds with 200 status and application/json content type", () => {
        return request(server)
          .get("/api/addEntry")
        //   .expect("Content-Type", /json/)
          .expect(200);
      });

      it('parses an array from the response to login', () => {
        return request(server)
          .get("/api/addEntry")
        //   .expect("Content-Type", /json/)
          .expect(200)
          .then((res) => {
            expect(isArray(res.locals.entries)).toEqual(true);
          });
      });
    });
  });

  //delete test goes here
  describe("/api/deleteEntry", () => {
    describe("DELETE", () => {
      it("responds with 200 status and application/json content type", () => {
        return request(server)
          .get("/api/addEntry")
        //   .expect("Content-Type", /json/)
          .expect(200);
      });
    });
  });
});
