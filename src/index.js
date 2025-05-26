require('dotenv').config({ path: '../.env' });
console.log('MONGO_URI:', process.env.MONGO_URI);
const cors = require('cors');

console.log('URI carregada:', process.env.MONGODB_URI);


const express = require('express');
const mongoose = require('mongoose');

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
    studioBrin: [String],
    like: { type: Number, default: 0 }
});

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;


app.delete('/product/:id', async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);
    return res.send(product);
});

app.get('/product', async (req, res) => {
    const product = await Product.find();
    return res.send(product);
});

app.post('/product', async (req, res) => {
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
        studioBrin: req.body.studioBrin,
        like: req.body.like || 0
    });

    await product.save()
    return res.send(product);
});

app.put('/product/:id', async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, {
        thumbnail: req.body.thumbnail,
        altThumbnail: req.body.altThumbnail,
        title: req.body.title,
        smallText: req.body.smallText,
        text: req.body.text,
        category: req.body.category,
        measure: req.body.measure,
        printing: req.body.printing,
        gallery: req.body.gallery,
        studioBrin: req.body.studioBrin,
        like: req.body.like || 0
    }, { new: true });
    return res.send(product);
});

app.patch('/product/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { $inc: { like: req.body.like } }, // Soma ao valor atual
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).send({ message: 'Produto não encontrado' });
    }

    res.status(200).send(updatedProduct);
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    res.status(500).send({ message: 'Erro interno do servidor' });
  }
});



// Rota para para alterações em massa
// app.patch('/product/init-likes', async (req, res) => {
//   const result = await Product.updateMany(
//     { like: { $exists: false } },  // trocar o like pela propiedade que deseja verificar
//     { $set: { like: 0 } }          // adiciona o campo com valor 0
//   );
//   res.send(result);
// });

app.listen(port, async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('MongoDB conectado com sucesso!');
      console.log(`App rodando na porta ${port}`);
    } catch (err) {
      console.error('Erro ao conectar no MongoDB:', err);
      process.exit(1);  // encerra o processo em caso de falha
    }
  });