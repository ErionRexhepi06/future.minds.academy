const http = require("http");
const fs = require("fs");
const path = require("path");

const btnStyles = `
  background-color: blue; 
  color: white; 
  padding: .5em 1em; 
  text-decoration: none; 
  font-size: 1.2em; 
  border-radius: 1em; 
  border: 2px solid blue; 
  cursor: pointer;
`;

const btnBox = `
  width: 100%; 
  height: 100%; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  flex-direction: column;
`;

const server = http.createServer((req, res) => {
  if (req.url === "/teksti.txt") {
    
    const filePath = path.join(__dirname, "teksti.txt");

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("File not found");
      } else {
        res.writeHead(200, {
          "Content-Type": "text/plain",
          "Content-Disposition": "attachment; filename=teksti.txt"
        });
        res.end(data);
      }
    });
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
      <div style="${btnBox}">
        <button style="${btnStyles}" onclick="window.location.href='/teksti.txt'">
           Download File <i class="fa-solid fa-file-arrow-down"></i>
        </button>
        <h5 style="font-family: sans-serif;">or you can add /teksti.txt in the browser search bar</h5>
      </div>
    `);
  }
});

server.listen(9000, () => {
  console.log("Server is running on port 9000");
});
