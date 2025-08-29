const cloudinary = require("../config/cloudinary");
const fs = require("fs");

async function uploadToCloudinary(filePath, folder) {
  try {
    if (!folder) {
      throw new Error("A pasta (folder) deve ser informada pelo frontend.");
    }

    const result = await cloudinary.uploader.upload(filePath, {
      folder,
      resource_type: "auto",
    });

    fs.unlinkSync(filePath);

    return result;
  } catch (error) {
    console.error("Erro no upload para Cloudinary:", error);
    throw error;
  }
}

module.exports = { uploadToCloudinary };
