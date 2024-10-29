const express = require('express');
const db = require('./db.js');
const app = express();

app.use(express.json());

const PAGE_SIZE = 10;

app.get('/products', (req, res) => {
    let page = Math.max(parseInt(req.query.page) || 1, 1);
    const products = db.products.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    if (products.length === 0) {
        res.status(404).end();
    } else {
        res.json(products);
    }
});

app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    const product = db.products.find(p => p.id == id);

    if (!product) {
        res.status(404).end();
        return;
    }

    product.supplier = db.suppliers.find(s => s.id == product.supplierId);
    res.json(product);
});

app.get('/suppliers/:id/products', (req, res) => {
    const id = req.params.id;
    const products = db.products.filter(p => p.supplierId == id);
    res.json(products);
});

app.post('/products', (req, res) => {
    const newProduct = {
        id: db.products.length + 1,
        name: req.body.name,
        price: req.body.price,
        supplierId: req.body.supplierId
    };

    db.products.push(newProduct);
    res.status(201).json(newProduct);
});

app.put('/products/:id', (req, res) => {
    const id = req.params.id;
    const product = db.products.find(p => p.id == id);

    if (!product) {
        res.status(404).end();
        return;
    }

    product.name = req.body.name || product.name;
    product.price = req.body.price || product.price;
    product.supplierId = req.body.supplierId || product.supplierId;

    res.json(product);
});

app.delete('/products/:id', (req, res) => {
    const id = req.params.id;
    const index = db.products.findIndex(p => p.id == id);

    if (index === -1) {
        res.status(404).end();
        return;
    }

    db.products.splice(index, 1);
    res.status(204).end();
});

app.listen(8585);
