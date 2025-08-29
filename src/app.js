const express = require("express");
const cors = require("cors");
const productRoutes = require('./routes/product.routes');
const externalRoutes = require('./routes/imported.routes');
const uploadRoutes = require("./routes/upload.routes");

// Middlewares globais
const app = express();

app.use(cors());
app.use(express.json());

// Rotas
app.use('/product', productRoutes);
app.use('/imported', externalRoutes);
app.use("/api", uploadRoutes);


module.exports = app;