const mongoose = require('mongoose');

const ExternalProductSchema = new mongoose.Schema({
    codigoAmigavel: String,
    nome: String,
    descricao: String,
    siteLink: String,
    imageLink: String,
});

module.exports = mongoose.model('ExternalProduct', ExternalProductSchema);