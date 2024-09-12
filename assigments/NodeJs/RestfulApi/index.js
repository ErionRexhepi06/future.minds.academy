const express = require('express');
const app = express();

let products = [
  { id: 1, name: 'Maic', price: 19.99 },
  { id: 2, name: 'Pantolla', price: 39.99 },
  { id: 3, name: 'Xhaket', price: 55.50 },
  { id: 4, name: 'Patika', price: 120.00 },
  { id: 5, name: 'Kapuc', price: 30.00 },
];

const parseRequestBody = (req, callback) => {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });
  req.on('end', () => {
    callback(JSON.parse(body));
  });
};

// GET /products - Retrieve the full list of products
app.get('/products', (req, res) => {
  res.status(200).json(products);
});

// POST /products - Add a new product to the list
app.post('/products', (req, res) => {
  parseRequestBody(req, (data) => {
    const { name, price } = data;
    const newProduct = {
      id: products.length + 1,
      name,
      price,
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
  });
});

// GET /products/:id - Retrieve a single product by its id
app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);
  
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  
  res.json(product);
});

// PUT /products/:id - Update a product’s name and/or price based on its id
app.put('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = products.findIndex((p) => p.id === productId);
  
  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  parseRequestBody(req, (data) => {
    const { name, price } = data;
    if (name) products[productIndex].name = name;
    if (price) products[productIndex].price = price;
    res.json(products[productIndex]);
  });
});

app.delete('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = products.findIndex((p) => p.id === productId);
  
  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  products.splice(productIndex, 1);
  res.status(204).send();
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
