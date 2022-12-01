const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "",
  password: "",
  database: "",
});

connection.connect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  connection.query("SELECT * FROM todo", function (err, rows, fields) {
    if (err) {
      res.send("실패");
    } else {
      res.send(rows);
    }
  });
});

app.post("/create", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  connection.query(
    "INSERT INTO todo (title, description) values (?,?)",
    [title, description],
    function (err, rows, fields) {
      if (err) {
        console.log(err);
      } else {
        console.log("성공");
      }
    }
  );
});

app.get("/select", (req, res) => {
  connection.query("SELECT * FROM todo", function (err, rows, fields) {
    if (err) {
      console.log(err);
      // console.log(err);
    } else {
      return res.send(rows);
    }
  });
});

app.put("/update", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const id = req.body.id;
  connection.query(
    "UPDATE todo SET title = ?,description = ? WHERE id = ?",
    [title, description, id],
    function (err, rows, fields) {
      if (err) {
        console.log(err);
      } else {
        console.log("성공");
      }
    }
  );
});

app.delete("/delete", (req, res) => {
  const id = req.body.id;
  connection.query(
    "DELETE FROM todo WHERE id = ?",
    [id],
    function (err, rows, fields) {
      if (err) {
        console.log(err);
      } else {
        console.log("성공");
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Connect at http://localhost:${port}`);
});
