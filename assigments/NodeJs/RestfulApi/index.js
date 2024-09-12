const express = require('express');
const app = express();

let products = [
  { id: 1, name: 'Maic', price: 19.99 },
  { id: 2, name: 'Pantolla', price: 39.99 },
  { id: 3, name: 'Xhaket', price: 55.50 },
  { id: 4, name: 'Patika', price: 120.00 },
  { id: 5, name: 'Kapuc', price: 30.00 },
];

app.use(express.json());

app.get('/products', (req, res) => {
  res.status(200).json(products);
});

app.post('/products', (req, res) => {
  const { name, price } = req.body;
  const newProduct = {
    id: products.length + 1,
    name,
    price,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
});

app.put('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = products.findIndex((p) => p.id === productId);
  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }
  const { name, price } = req.body;
  if (name) products[productIndex].name = name;
  if (price) products[productIndex].price = price;
  res.json(products[productIndex]);
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
