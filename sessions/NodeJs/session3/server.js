const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url, true);
  const pathname = parseUrl.pathname;

  const menu = [
    { id: 1, name: "Pasul" },
    { id: 2, name: "Fli" },
    { id: 3, name: "Pica" },
    { id: 4, name: "Doner" },
  ];

  if (req.method === "GET" && pathname == "/api/menu") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Gell All menu", menu }));
  } else if (req.method === "POST" && pathname === "/api/menu") {
    console.log("Body", req);
    res.statusCode = 201;

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Restaurant Menu" }));
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

server.listen(5000, () => {
  console.log("Server running at http://localhost:5000/");
});


// give me a simple server that can get a restaurant meny 
