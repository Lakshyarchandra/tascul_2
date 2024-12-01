const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admincontroller");
const authenticateToken = require("../middleware/authMiddleware");

router.get("/stats", authenticateToken, adminController.getAdminStats);


router.get("/projects", authenticateToken, adminController.getProjects);
router.post("/projects", authenticateToken, adminController.addProject);


router.get("/reviews", authenticateToken, adminController.getReviews);
router.patch("/reviews/:id", authenticateToken, adminController.acceptReview);
router.delete("/reviews/:id", authenticateToken, adminController.rejectReview);

module.exports = router;
