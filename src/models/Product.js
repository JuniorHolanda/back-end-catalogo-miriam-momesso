const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    thumbnail: String,
    altThumbnail: String,
    title: String,
    smallText: String,
    text: String,
    category: [String],
    measure: [String],
    gallery: [
        {
        img: String,
        altImg: String,
        },
    ],
    like: { type: Number, default: 0 },
});


module.exports = mongoose.model('Product', productSchema);