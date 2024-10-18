const http = require('http');

const server = http.createServer((req,res) => {
    res.write('hello from Erion');
    res.end();
})

server.listen(8500);