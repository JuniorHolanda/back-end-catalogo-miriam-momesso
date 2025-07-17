const express = require("express");
const cors = require("cors");
const productRoutes = require('./routes/product.routes');

// Middlewares globais
const app = express();

app.use(cors());
app.use(express.json());

// Rotas
app.use('/product', productRoutes);


module.exports = app;