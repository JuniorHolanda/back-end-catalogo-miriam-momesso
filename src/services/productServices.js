const Product = require('../models/Product');

exports.getAll = () => Product.find();
exports.getOne = () => Product.findById(id);
exports.create = (data) => new Product(data).save();
exports.update = (id, data) => Product.findByIdAndUpdate(id, data, { new: true });
exports.remove = (id) => Product.findByIdAndDelete(id);
exports.like = (id, amount) => Product.findByIdAndUpdate(id, { $inc: { like: amount } }, { new: true });
