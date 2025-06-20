const express = require('express');
const router = express.Router();
const trackController = require('../controllers/trackController');
const auth = require('../middleware/auth');

router.post('/', auth, trackController.track);

module.exports = router; 