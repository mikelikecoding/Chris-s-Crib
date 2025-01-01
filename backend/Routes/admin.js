const express = require("express");
const router = express.Router();

// Your admin routes here
router.get("/dashboard", (req, res) => {
  // Admin dashboard logic
  res.json({ message: "Welcome to the Admin Dashboard!" });
});

module.exports = router;
