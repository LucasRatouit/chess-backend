const { Pool } = require("pg");
require('dotenv').config();

const db = new Pool ({
  host: process.env.DB_HOSTNAME,
  port: process.env.NEW_DB_PORT || process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

module.exports = { db };
