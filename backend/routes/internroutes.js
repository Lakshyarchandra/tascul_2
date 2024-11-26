const express = require('express');
const router = express.Router();
const internController = require('../controllers/interncontroller');
const authenticateToken = require('../middleware/authMiddleware');

// Secure routes
router.get('/details', authenticateToken, internController.getInternshipDetails); // Fetch internship details

module.exports = router;
