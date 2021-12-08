const db = require("../models/passwordModel");
const bcrypt = require('bcryptjs');
const uuid = require('uuid');

const passwordController = {};

//rewrite login to query DB for user/password combo instead of the for loop?
passwordController.getLogin = (req, res, next) => {
  console.log("Username: ", req.body.username);
  console.log("Password: ", req.body.passwordUser);
  const queryGetLogin =
    "SELECT * FROM users WHERE username=$1;";
  const value = [req.body.username];
  db.query(queryGetLogin, value)
    .then((rset) => {
      if (!rset.rows.length) {
        return next(new Error('Username not found'))
      }
      const hash = rset.rows[0].passcode;
      if (bcrypt.compareSync(req.body.passwordUser, hash)) {
        console.log('password is correct')
        res.locals.userMetaData = {
          userExists: false,
          userAdded: false,
          userID: null,
        };
        return next();
      } else {
        res.locals.userMetaData = {
          userExists: true,
          userAdded: false,
          userID: rset.rows[0]._id,
        };
        return next(new Error('Password was incorrect'));
      }
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
};

// create user in DB
passwordController.getSignup = (req, res, next) => {
  const hash = bcrypt.hashSync(req.body.passwordUser, 10)
  console.log("Username: ", req.body.username);
  console.log("Password: ", req.body.passwordUser);
  //check to see if username and password have been entered
  if (!req.body.username || !req.body.passwordUser)
    return next(
      new Error("Please create an account with correct username and password")
    );
  const values = [req.body.username, hash];
  const queryInsertUser =
    "INSERT INTO users (username, passcode) VALUES($1, $2);";

  db.query(queryInsertUser, values)
    .then(() => {
      res.locals.userMetaData = {
        userExists: false,
        userAdded: true,
        userID: null,
      };
      return next();
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
};

passwordController.getAllEntries = (req, res, next) => {
  console.log(req.query.userID);
  // const queryGetEntries = `SELECT * FROM entry WHERE user_id=${req.query.userID};`;
  const queryGetEntries = `SELECT * FROM entry WHERE user_id=${Number(
    req.query.userID
  )};`;
  db.query(queryGetEntries).then((rset) => {
    // console.log("rset", rset);
    res.locals.entries = [...rset.rows];
    return next();
  });
};

passwordController.addEntry = (req, res, next) => {
  console.log("reached addEntry");
  // console.log(req.query);
  const values = [
    req.query.urlEntry,
    req.query.userID,
    req.query.passwordEntry,
  ];
  const queryInsertUser =
    "INSERT INTO entry (url,user_id, entry_password) VALUES($1, $2, $3) RETURNING *;";
  db.query(queryInsertUser, values, (rset) => {
    res.locals.entryAdded = true;
    return next();
  });
};

passwordController.setSessionCookie = (req, res, next) => {
  const session_id = uuid.v4();
  const text = `
    UPDATE users
    SET session_id=$1
    WHERE username=$2
  ;`;
  const values = [session_id, req.body.username];

  db.query(text, values)
    .then((response) => {
      res.cookie("session_id", session_id, {
        httpOnly: true,
        secure: true,
      });
      res.cookie("username", req.body.username);
      next();
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
};

passwordController.authorizeSession = (req, res, next) => {
  if (!req.cookies.session_id) {
    return next(new Error("Permission denied"));
  }
  const text = `
    SELECT * FROM users
    WHERE session_id = $1
  ;`;
  values = [req.cookies.session_id];
  db.query(text, values)
    .then((response) => {
      if (response.rows.length) {
        return next();
      } else {
        return next(new Error("Permission denied"));
      }
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
};

//get, put and delete entries
passwordController.authorizeSessionForEntry = (req, res, next) => {
  if (!req.cookies.session_id) {
    return next(new Error("Permission denied"));
  }
  const text = `
    SELECT * FROM entry
    INNER JOIN users ON entry.user_id = users._id
    WHERE entry.id = $1
    AND users.session_id = $2
  ;`;
  //need to update the below TODO
  values = [req.params.message_id, req.cookies.session_id];
  db.query(text, values)
    .then((response) => {
      if (response.rows.length) {
        return next();
      } else {
        return next(new Error("Permission denied"));
      }
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
};

module.exports = passwordController;
