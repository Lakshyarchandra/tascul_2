const express = require('express');
const router = express.Router();
const authcontroller = require('../controllers/authcontroller'); // Ensure the correct path

// Make sure the methods are correctly defined in authcontroller.js
router.post('/register', authcontroller.register); // Call to the register method
router.post('/login', authcontroller.login); // Call to the login method

module.exports = router;
