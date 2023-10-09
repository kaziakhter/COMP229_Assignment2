const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./server/routes/productRoutes');
const categoryRoutes = require('./server/routes/categoryRoutes');
const config = require('./config/config');
const helmet = require('helmet');

const app = express();
const PORT = config.port;

// Middleware
app.use(cors());
app.use(express.json());
app.use(helmet());

mongoose.connect(config.mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');

  app.get('/', (req, res) => {
    res.json({ message: 'Welcome to DressStoreApplication.' });
  });

  app.use(`${config.baseUrl}/products`, productRoutes);
  app.use(`${config.baseUrl}/categories`, categoryRoutes);

  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
});