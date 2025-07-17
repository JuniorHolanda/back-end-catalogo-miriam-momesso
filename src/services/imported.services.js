const ExternalProduct = require('../models/ImportedProduct');
exports.getAll = () => ExternalProduct.find();