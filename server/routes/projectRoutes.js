const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const auth = require('../middleware/auth');

router.post('/', projectController.createProject);
router.delete('/:id', auth, projectController.deleteProject);

module.exports = router; 