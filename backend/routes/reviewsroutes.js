const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewcontroller');

router.get('/accepted', reviewController.getAcceptedReviews);

module.exports = router;
