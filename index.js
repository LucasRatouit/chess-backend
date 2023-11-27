const express = require("express");
const { db } = require('./db');
const cors = require('cors');

//

const app = express();
const port = process.env.PORT;
app.use(cors());

//

app.get("/", (req, res) => {
  res.json("Hello Express !");
});

app.get("/all", async (req, res) => {
  try {
    const users = await db.query("SELECT * FROM chess");

    res.json(users.rows);
  } catch (err) {
    console.error("Erreur lors de la requête à la base de données", err);
    res.status(500).json({ error: "Erreur lors de la requête à la base de données"});
  }
});

//

app.listen(port, () => {
  console.log(`Serveur lancé sur : http://localhost:${port}`);
});
