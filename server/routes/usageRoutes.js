const express = require('express');
const router = express.Router();
const usageController = require('../controllers/usageController');
const auth = require('../middleware/auth');

router.get('/:projectId', auth, usageController.getUsage);

module.exports = router; 