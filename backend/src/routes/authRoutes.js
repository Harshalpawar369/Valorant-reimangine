const express = require('express');
const authController = require('../controllers/authControllers.js')
const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/isLoggedIn', authController.isLoggedIn);
router.post('/logout', authController.logoutUSer);

module.exports = router;