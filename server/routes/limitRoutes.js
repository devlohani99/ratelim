const express = require('express');
const router = express.Router();
const limitController = require('../controllers/limitController');

router.post('/', limitController.setLimit);

module.exports = router; 