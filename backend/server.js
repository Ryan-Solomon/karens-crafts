import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is runnin yo');
});

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV;

app.listen(5000, console.log(`Server running in ${MODE} mode on port ${PORT}`));
