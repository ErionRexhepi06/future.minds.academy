const express = require("express");
const mysql = require("mysql2");
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json());

// const token = jwt.sign({ userId: 123 }, 'secretKey', { expiresIn: '1h' });
// console.log('JWT Token:', token);
// // Verifying the token
// const decoded = jwt.verify(token, 'secretKey');
// console.log('Decoded Token:', decoded);

const connection = mysql.createConnection({
    host: "localhost",
    user: "ardit",
    password: "adminardit",
    database: "school",
  });
  
  app.post("/signup", async (req, res) => {
    const { username, password } = req.body;
    console.log("passwrd", password);
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log("hashed password", hashedPassword);
  });
  
  
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });