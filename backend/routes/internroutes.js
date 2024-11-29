const express = require('express');
const router = express.Router();
const internController = require('../controllers/interncontroller');
const authenticateToken = require('../middleware/authMiddleware');

router.get('/details', authenticateToken, internController.getInternshipDetails);
router.post('/reviews', authenticateToken, internController.postReview);

module.exports = router;
