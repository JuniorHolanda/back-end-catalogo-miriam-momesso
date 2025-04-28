const express = require('express');
const mongoose = require('mongoose');
mongoose.connect(''); // MongoDB connection string

const Product = mongoose.model('Product', {
    thumbnail: String,
    altThumbnail: String,
    title: String,
    smallText: String,
    text: String,
    category: [String],
    measure: [String],
    printing: [{ arrow: String }],
    gallery: [
        {
            img: String,
            altImg: String
        }
    ],
    studioBrin: [String]
});

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', async (req, res) => {
    const product = new Product({
        thumbnail: req.body.thumbnail,
        altThumbnail: req.body.altThumbnail,
        title: req.body.title,
        smallText: req.body.smallText,
        text: req.body.text,
        category: req.body.category,
        measure: req.body.measure,
        printing: req.body.printing,
        gallery: req.body.gallery,
        studioBrin: req.body.studioBrin
    });

    await product.save()
    res.send('Product saved!');
});

app.listen(port, () => {
  console.log('app running');
});
