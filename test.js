const express = require("express");
const app = express();
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "test",
});

app.get("/user", (req, res) => {
  const id = req.query.id;
  const query = `SELECT * FROM users WHERE id = ${id}`;
  connection.query(query, (error, results) => {
    if (error) {
      throw error;
    }
    res.send(results);
  });
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});