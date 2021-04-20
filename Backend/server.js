const express = require('express');
const products = require('./data/products');

const app = express();

app.get('/', (req, res) => {
  res.send('API is running');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product_id = products.find((p) => p._id === req.params.id);

  res.json(product_id);
});

app.listen(5000, console.log('Port is running on 5000'));
