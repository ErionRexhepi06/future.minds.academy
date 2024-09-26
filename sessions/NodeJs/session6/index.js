const express = require("express");
const mysql = require("mysql2");
const app = express();

app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "erioni8778",
  database: "school",
});

app.post("/students", (req, res) => {
  const { name, age, grade, gender } = req.body;

  const query = "INSERT INTO students (name, age, grade, gender) VALUES (?,?,?,?)";
  connection.query(query, [name, age, grade, gender], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(201).send("Student created successfully");
  });
});

app.get("/students", (req, res) => {
  const query = "SELECT * from students";
  connection.query(query, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).json(result);
  });
});

app.put("/students/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, grade, gender } = req.body;
  if (!name || !age || !grade) {
    return res.status(500).send("Parameters are missing");
  }
  const query = "UPDATE students SET name = ?, age = ?, grade = ?, gender = ? WHERE id = ?";

  connection.query(query, [name, age, grade, gender, id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send("Student updated successfully");
  });
});

app.delete("/students/:id", (req, res) => {
  const { id } = req.params;

  const query = "DELETE FROM students WHERE id = ?";

  connection.query(query, [Number(id)], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send("Student deleted successfully");
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
