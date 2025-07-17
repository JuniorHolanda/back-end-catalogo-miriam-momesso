const mongoose = require('mongoose');

const importedProductSchema = new mongoose.Schema({
    codigoAmigavel: String,
    nome: String,
    descricao: String,
    siteLink: String,
    imageLink: String,
});

module.exports = mongoose.model('ExternalProduct', importedProductSchema);