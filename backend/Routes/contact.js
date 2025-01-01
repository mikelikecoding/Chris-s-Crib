// routes/contact.js

const express = require("express");
const router = express.Router();

// Temporary storage for contact submissions
let contactSubmissions = [];

// POST: Handle contact form submissions
router.post("/", (req, res) => {
  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const newSubmission = {
    id: contactSubmissions.length + 1,
    name,
    email,
    message,
    date: new Date(),
  };

  contactSubmissions.push(newSubmission);
  res.status(201).json({ message: "Contact form submitted successfully.", submission: newSubmission });
});

// GET: Fetch all contact submissions (for admin use)
router.get("/", (req, res) => {
  res.status(200).json(contactSubmissions);
});

// Export the router
module.exports = router;
