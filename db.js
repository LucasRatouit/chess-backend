const { Pool } = require("pg");
require('dotenv').config();
const certifBase64 = process.env.DB_CERTIF;
const certif = Buffer.from(certifBase64, 'base64').toString('utf-8');

const db = new Pool ({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  ssl: {
    ca: certif,
  },
});

module.exports = { db };
