const express = require('express');
const router = express.Router();
const documentController = require('../controllers/documentController');

// Route to generate Word documents
router.post('/', documentController.generateDocument);

module.exports = router;