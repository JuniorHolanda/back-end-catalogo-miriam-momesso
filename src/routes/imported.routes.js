const express = require('express');
const router = express.Router();
const controller = require('../controllers/importedProductController');

router.get('/', controller.getAll);

module.exports = router;