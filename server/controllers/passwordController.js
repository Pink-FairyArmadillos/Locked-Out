const db = require('../models/passwordModel');

const passwordController = {};

passwordController.getLogin = (req, res, next) => {
  const queryGetLogin = 'SELECT * FROM users';
  db.query(queryGetLogin).then((rset) => {
    res.locals.userMetaData = {
      userExists: true,
      userId: null,
    };
    for (let i = 0; i < rset.rowCount; i++) {
      if (
        req.query.username === rset.rows[i].username &&
        req.query.passwordUser === rset.rows[i].password
      ) {
        res.locals.userMetaData = {
            userExists: true,
          userId: rset.rows[i]._id,
        };
      }
    }
    return next();
  });
};



passwordController.getSignup = (req, res, next) => {
  const values = [req.query.id, req.query.username, req.query.passwordUser];
  const queryInsertUser =
    'INSERT INTO users (_id, username, password) VALUES($1, $2, $3) RETURNING *;';
  if (res.locals.userMetaData.userExists) {
    res.locals.userMetaData = {
        userExists: false,
      userId: null,
    };
    return next();
  } else if (!res.locals.userMetaData.userExists) {
    db.query(queryInsertUser, values, (rset) => {
      res.locals.userMetaData = {
        userExists: true,
        userId: rset.rows[0]._id,
      };

      return next();
    });
  }
};

passwordController.getAllEntries = (req, res, next) => {
  const queryGetEntry = `SELECT * FROM entry WHERE user_id=${req.query.userId};`;
  db.query(queryGetEntry).then((rset) => {
    res.locals.entries = rset.rows;
    return next();
  });
};

passwordController.addEntry = (req, res, next) => {
  const values = [
    req.query.id,
    req.query.urlEntry,
    req.query.userId,
    req.query.passwordEntry,
  ];
  const queryInsertUser =
    'INSERT INTO entry (_id, url,user_id, entry_password) VALUES($1, $2, $3, $4) RETURNING *;';
  db.query(queryInsertUser, values, (rset) => {
    res.locals.wasSuccessful = true;
    return next();
  });
};

module.exports = passwordController;
