const http = require('http');
const fs = require('fs').promises;
const path = require('path');
const PORT = 8191;
const BASE_PATH = path.join(__dirname, 'public');

const server = http.createServer(async (req, res) => {
    let url = req.url;
    if (url === "" || url === '/') {
        url = 'meta.html';
    }

    switch (req.method) {
        case "GET":
            await GET(url, req, res);
            break;
        case "POST":
            await POST(url, req, res);
            break;
        default:
            res.writeHead(405, { 'Content-Type': 'text/plain' });
            res.end('Method Not Allowed');
            break;
    }
});

async function GET(url, req, res) {
    const filePath = path.join(BASE_PATH, url);

    try {
        const file = await fs.readFile(filePath);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(file);
    } catch (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        const errorFile = await fs.readFile(path.join(BASE_PATH, '404.html'));
        res.write(errorFile);
    } finally {
        res.end();
    }
}

async function POST(url, req, res) {
    let body = '';
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function () {
        if (url === '/facebook.html') {
            res.writeHead(302, { 'Location': 'https://www.facebook.com/' });
        } else if (url === '/instagram.html') {
            res.writeHead(302, { 'Location': 'https://www.instagram.com/' });
        } else if (url === '/whatsapp.html') {
            res.writeHead(302, { 'Location': 'https://www.whatsapp.com/' });
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
            return;
        }
        res.end();
    });
}

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
