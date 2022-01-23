const request = require("supertest");
const db = require("../server/models/passwordModel.js");

const server = "http://localhost:3000";
const queryResetDB =
`DROP TABLE entry, users; 
CREATE TABLE users (
  id SERIAL NOT NULL PRIMARY KEY, 
  username VARCHAR UNIQUE, 
  passcode VARCHAR, 
  session_id uuid); 
CREATE TABLE entry (
  id SERIAL NOT NULL,  
  url VARCHAR,
  user_id INT REFERENCES users,
  entry_password VARCHAR
);`;
/**
 * Read the docs! https://www.npmjs.com/package/supertest
 */



describe("Route integration", () => {
  beforeAll((done) => {
    db.query(queryResetDB);
    done();
  });

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
          .send({username: "Regis2", passwordUser: "tarotcards"})
          .expect(200);
      });

      it('parses an object from the response to signup', () => {
        return request(server)
          .post("/api/signup")
          .send({username: "Regis3", passwordUser: "tarotcards"})
          .expect(200)
          .then((res) => {
            expect(typeof res.body).toEqual("object"); //update when we implement signup
          });
      });
    });
  });

  describe("/api/login", () => {
    describe("POST", () => {
      it("responds with 200 status and application/json content type", () => {
        return request(server)
          .post("/api/login")
          .send({username: "Regis2", passwordUser: "tarotcards"})
          // .expect("Content-Type", /json/)
          .expect(200);
      });

      it('parses an object from the response to login', () => {
        return request(server)
          .post("/api/login")
          .send({username: "Regis3", passwordUser: "tarotcards"})
          // .expect("Content-Type", /json/)
          .expect(200)
          .then((res) => {
            expect(typeof res.body).toEqual("object");
            //{ userExists: false, userAdded: false, userID: null }
            expect(res.body).toHaveProperty('userExists');
            expect(res.body).toHaveProperty('userAdded');
            // expect(res.body).toHaveProperty('userID');
          });
      });
    });
  });

  //post test goes here
  describe("/api/addEntry", () => {
    describe("POST", () => {
      it("responds with 200 status and application/json content type", () => {
        return request(server)
          .post("/api/addEntry")
          .query({urlEntry: "www.hackme.com", userID: 2, passwordEntry: "hunter2"})
          .expect(200);
      });

      it('parses an array from the response to login', () => {
        return request(server)
          .post("/api/addEntry")
          .query({urlEntry: "www.hackme.com", userID: 2, passwordEntry: "hunter2"})
        //   .expect("Content-Type", /json/)
          .expect(200)
          .then((res) => {
            expect(Array.isArray(res.body)).toEqual(true);
          });
      });
    });
  });

    //update test goes here
    describe("/api/updateEntry", () => {
      describe("PUT", () => {
        it("responds with 200 status and application/json content type", () => {
          return request(server)
            .put("/api/updateEntry")
            .send({entryID: 1, urlEntry: "www.pwnme.com", userID: 2, passwordEntry: "password123"})
            .expect(200);
        });
  
        it('parses an array from the response to login', () => {
          return request(server)
            .put("/api/updateEntry")
            .send({entryID: 2, urlEntry: "www.pwnme.com", userID: 2, passwordEntry: "hunter2"})
          //   .expect("Content-Type", /json/)
            .expect(200)
            .then((res) => {
              expect(Array.isArray(res.body)).toEqual(true);
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
          .send({userID: 2, entryID: 2})
        //   .expect("Content-Type", /json/)
          .expect(200);
      });
    });
  });
});
