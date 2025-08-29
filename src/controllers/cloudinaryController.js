const { uploadToCloudinary } = require('../services/uploadService');

async function uploadController(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Nenhum arquivo enviado." });
    }

    const { folder } = req.body;
    if (!folder) {
      return res.status(400).json({ error: "Informe a pasta (folder)." });
    }

    const result = await uploadToCloudinary(req.file.path, folder);

    return res.json({
      url: result.secure_url,
    });
  } catch (error) {
    console.error("Erro ao fazer upload:", error); // loga no terminal
    return res.status(500).json({ error: error.message }); // mostra msg real
  }
}


module.exports = { uploadController };