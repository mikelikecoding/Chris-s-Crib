// backend/routes/donations.js
const express = require('express');
const router = express.Router();

// Example route for donations
router.get('/', (req, res) => {
  res.json({ message: 'Donation data here' });
});

module.exports = router;
