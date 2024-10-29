const express = require("express");
const mysql = require("mysql2");
const app = express();

app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "erioni8778",
  database: "library",
});

app.post("/books", (req, res) => {
  const { title, author, genre, rating, year } = req.body;
  const query = "INSERT INTO books (title, author, genre, rating, year) VALUES (?, ?, ?, ?, ?)";
  connection.query(query, [title, author, genre, rating, year], (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(201).send("Book created successfully");
  });
});

app.get("/books", (req, res) => {
  const query = "SELECT * FROM books";
  connection.query(query, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).json(result);
  });
});

app.get("/books/top", (req, res) => {
  const query = "SELECT * FROM books ORDER BY rating DESC LIMIT 10";
  connection.query(query, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).json(result);
  });
});

app.get("/books/ordered-by-genre", (req, res) => {
  const query = "SELECT * FROM books ORDER BY genre";
  connection.query(query, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).json(result);
  });
});

app.put("/books/:id", (req, res) => {
  const { id } = req.params;
  const { title, author, genre, rating, year } = req.body;
  if (!title || !author || !genre || !rating || !year) {
    return res.status(400).send("Parameters are missing");
  }
  const query = "UPDATE books SET title = ?, author = ?, genre = ?, rating = ?, year = ? WHERE id = ?";
  connection.query(query, [title, author, genre, rating, year, id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.affectedRows === 0) {
      return res.status(404).send("Book not found");
    }
    res.status(200).send("Book updated successfully");
  });
});

app.delete("/books/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM books WHERE id = ?";
  connection.query(query, [Number(id)], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.affectedRows === 0) {
      return res.status(404).send("Book not found");
    }
    res.status(200).send("Book deleted successfully");
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});