require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./src/app');


const port = process.env.PORT || 3000;


app.listen(port, async () => {
try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB conectado com sucesso!");
    console.log(`Servidor rodando na porta ${port}`);
} catch (err) {
    console.error("Erro ao conectar no MongoDB:", err);
    process.exit(1); // encerra o processo em caso de falha
}
});