const productService = require('../services/productServices');

exports.getAll = async (req, res) => {
    const products = await productService.getAll();
    res.send(products);
};

exports.getOne = async (req, res) => {
    const product = await productService.getOne(req.params.id);
    res.send(product);
}

exports.create = async (req, res) => {
    const product = await productService.create(req.body);
    res.send(product);
};

exports.update = async (req, res) => {
    const product = await productService.update(req.params.id, req.body);
    res.send(product);
};

exports.remove = async (req, res) => {
    const product = await productService.remove(req.params.id);
    res.send(product);
};

exports.like = async (req, res) => {
    try {
    const updated = await productService.like(req.params.id, req.body.like);
    if (!updated) return res.status(404).json({ message: 'Produto não encontrado' });
    res.send(updated);
    } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao curtir produto.' });
    }
};