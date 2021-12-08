const { Pool } = require("pg");
require('dotenv').config();
const process = require('process');

const pool
//check for the test environment
if (process.env.NODE_ENV === 'test') {
  pool = new Pool({
    connectionString: process.env.TDB_URI,
  });
} else {
  pool = new Pool({
    connectionString: process.env.DB_URI,
  });
}

//initialize pool with the test database



module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
