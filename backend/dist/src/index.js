import { products } from './data/products.js';
import express from 'express';
import 'dotenv/config';
import connectionDB from './../config/db.js';
connectionDB();
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
const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV;
app.listen(PORT, () => console.log(`Server running in ${MODE} mode on port ${PORT}`));
//# sourceMappingURL=index.js.map