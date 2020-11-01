const express = require('express');
import { products } from './data/products';

const app = express();

app.get('/', (_req, res) => {
  res.send('API runnin my man');
});

app.get('/api/products', (_req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((product) => product._id === req.params.id);

  res.json(product);
});

app.listen(5000, console.log('Server running on 5k'));
