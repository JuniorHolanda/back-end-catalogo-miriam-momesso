

const axios = require("axios");
const ExternalProduct = require('../models/ExternalProduct.js');

module.exports = async function syncExternalProducts() {
    try {
        const response = await axios.get(
            "https://api.minhaxbz.com.br:5001/api/clientes/GetListaDeProdutos?cnpj=08231691000146&token=5007EFB81C"
        );
        const imported = response.data;

        if (!Array.isArray(imported)) {
            console.log("formato inesperado vindo da API externa");
            return;
        }

        const productsFormatted = imported.map((item) => ({
            codigoAmigavel: item.CodigoAmigavel,
            nome: item.Nome,
            descricao: item.Descricao,
            siteLink: item.SiteLink,
            imageLink: item.ImageLink,
        }));

        await ExternalProduct.deleteMany();
        await ExternalProduct.insertMany(productsFormatted);
        console.log("Produtos externos sincronizados com sucesso!");
        
    } catch (error) {
            console.error("Erro ao sincronizar com a API externa:", error.message);
    }
}