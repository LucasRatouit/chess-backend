const { Pool } = require('pg');
require('dotenv').config();

const dbConfig = {
  host: process.env.DB_HOSTNAME,
  port: process.env.NEW_DB_PORT || process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};

const client = new Pool(dbConfig);

client.connect()
  .then(() => {
    console.log('Connexion réussie !');
    client.end();
  })
  .catch((error) => {
    console.error('Erreur de connexion :', error);
  });