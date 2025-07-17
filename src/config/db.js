const mongoose = require("mongoose");

async function connectToDatabase() {
const uri = process.env.MONGODB_URI;

if (!uri) {
    console.error("URI do MongoDB não definida em .env (MONGODB_URI)");
    process.exit(1);
}

try {
    await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    });

    console.log("MongoDB conectado com sucesso!");
    
} catch (error) {
    console.error("Erro ao conectar no MongoDB:", error.message);
    process.exit(1);
}
}

module.exports = connectToDatabase;
