const db = require("../models/passwordModel");

const passwordController = {};

passwordController.getLogin = (req, res, next) => {
  const queryGetLogin = "SELECT * FROM users";
  db.query(queryGetLogin).then((rset) => {
    res.locals.userMetaData = {
      userExists: false,
      userAdded: false,
      userID: null,
    };
    for (let i = 0; i < rset.rowCount; i++) {
      if (
        req.query.username === rset.rows[i].username &&
        req.query.passwordUser === rset.rows[i].password
      ) {
        res.locals.userMetaData = {
          userExists: true,
          userAdded: false,
          userID: rset.rows[i]._id,
        };

        res.locals.currentUserID = rset.rows[i]._id;
        return next();
      }
    }
    return next();
  });
};

passwordController.getTotalUsers = (req, res, next) => {
  const queryGetTotal = "SELECT COUNT(username) FROM users";
  db.query(queryGetTotal).then((rset) => {
    res.locals.totalUsers = Number(rset.rows[0].count);
    return next();
  });
};

passwordController.getSignup = (req, res, next) => {
  const currID = Number(res.locals.totalUsers) + 1;
  const values = [currID, req.query.username, req.query.passwordUser];
  const queryInsertUser =
    "INSERT INTO users (_id, username, password) VALUES($1, $2, $3);";

  if (!!res.locals.userMetaData.userExists) {
    return next();
  } else if (!res.locals.userMetaData.userExists) {
    db.query(queryInsertUser, values).then(() => {
      res.locals.userMetaData = {
        userExists: true,
        userAdded: true,
        userID: currID,
      };
      return next();
    });
  }
};

passwordController.getAllEntries = (req, res, next) => {
  console.log(req.query.userID)
  // const queryGetEntries = `SELECT * FROM entry WHERE user_id=${req.query.userID};`;
  const queryGetEntries = `SELECT * FROM entry WHERE user_id=${Number(req.query.userID)};`;
  db.query(queryGetEntries).then((rset) => {
    console.log("rset", rset);
    res.locals.entries = [...rset.rows];
    return next();
  });
};

passwordController.addEntry = (req, res, next) => {

  const values = [
    req.query.urlEntry,
    req.query.userName,
    req.query.userID,
    req.query.passwordEntry,
  ];
  const queryInsertUser =
    "INSERT INTO entry (urlentry, username, userid, passwordentry) VALUES($1, $2, $3, $4) RETURNING *;";
  db.query(queryInsertUser, values, (rset) => {
    res.locals.entryAdded = true;
    return next();
  });
};

passwordController.updateEntry = (req, res, next) => {
  const updatedValues = [
    req.query.urlEntry,
    req.query.userName,
    req.query.userID,
    req.query.passwordEntry
  ];
  const queryUpdateEntry = "UPDATE entry SET(urlentry, username, userid, passwordentry) VALUES($1, $2, $3, $4) WHERE (urlentry, userid) VALUES($1, $3)";
  db.query(queryUpdateEntry, updatedValues, (rset) => {
    return next();
  });
}

passwordController.deleteEntry = (req, res, next) => {
  const deletedValues = [
    req.query.entryURL = '',
    req.query.entryUserName = '',
    req.query.userID,
    req.query.entryPassword =''
  ];
  const queryDeleteEntry = "DELETE FROM entry WHERE (id) VALUE $3;";
  db.query(queryDeleteEntry, deletedValues, (rset) => {
    return next();
  });
}

module.exports = passwordController;
