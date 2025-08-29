const express = require("express");
const multer = require("multer");
const { uploadController } = require("../controllers/cloudinaryController");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("file"), uploadController);

module.exports = router;
