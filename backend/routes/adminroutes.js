const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admincontroller');

router.get('/stats', adminController.getAdminStats);

module.exports = router;
