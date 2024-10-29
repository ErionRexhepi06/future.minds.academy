const express = require('express');
const path = require('path');

const app = express();

const STATIC_ASSETS_PATH = path.join(__dirname, 'public');

app.use('/public', express.static('public'));

app.get('/facebook', (req,res) =>{
    res.sendFile(path.join(STATIC_ASSETS_PATH, '/facebook.html'))
});

app.listen(8080);