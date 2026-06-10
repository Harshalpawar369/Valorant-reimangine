const express = require('express');
const aiController = require('../controllers/aiControllers.js');

const router = express.Router();

router.post('/', aiController.chat);
router.post('/chat', aiController.chat);

module.exports = router;