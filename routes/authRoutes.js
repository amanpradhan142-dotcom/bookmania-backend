const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Use controller implementations that interact with MongoDB
router.post('/signup', authController.signup);
router.post('/login', authController.login);

module.exports = router;