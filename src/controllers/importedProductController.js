const importedProduct = require('../utils/syncImportedProducts');
const externalService = require('../services/imported.services');

exports.getAll = async (req, res) => {
  const products = await externalService.getAll();
  res.send(products);
};
