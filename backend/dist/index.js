"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const products_1 = require("./data/products");
const app = express();
app.get('/', (_req, res) => {
    res.send('API runnin my man');
});
app.get('/api/products', (_req, res) => {
    res.json(products_1.products);
});
app.get('/api/products/:id', (req, res) => {
    const product = products_1.products.find((product) => product._id === req.params.id);
    res.json(product);
});
app.listen(5000, console.log('Server running on 5k'));
//# sourceMappingURL=index.js.map