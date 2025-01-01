const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../middlewares/auth");

// Validation route to check if the user is authenticated
router.get("/validate", authenticateToken, (req, res) => {
  res.status(200).json({ role: req.user.role });
});

module.exports = router;
