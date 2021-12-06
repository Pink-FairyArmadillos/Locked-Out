const { Pool } = require("pg");

const PG_URI =
  "postgres://dmzmkvut:cRhSBP4_j55xxLWBaZXajCPfOsjeINch@fanny.db.elephantsql.com/dmzmkvut";

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
