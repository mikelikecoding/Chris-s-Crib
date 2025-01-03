const express = require("express");
const router = express.Router();
const db = require("../db"); // Adjust path if necessary

// POST: Handle contact form submissions
router.post("/", (req, res) => {
    const { name, email, message } = req.body;
  
    // Log the request body for debugging
    console.log("Received contact submission:", { name, email, message });
  
    if (!name || !email || !message) {
      console.log("Error: Missing fields in the request");
      return res.status(400).json({ error: "All fields are required." });
    }
  
    const query = `
      INSERT INTO contact_submissions (name, email, message, date)
      VALUES (?, ?, ?, ?)
    `;
    db.run(query, [name, email, message, new Date().toISOString()], function (err) {
      if (err) {
        console.error("Database insertion error:", err);
        return res.status(500).json({ error: "Failed to save submission." });
      }
      console.log("New submission saved:", { id: this.lastID, name, email, message });
      res.status(201).json({ message: "Contact form submitted successfully." });
    });
  });
  

  router.get("/", (req, res) => {
    db.all("SELECT * FROM contact_submissions", [], (err, rows) => {
      if (err) {
        console.error("Database retrieval error:", err);
        return res.status(500).json({ error: "Failed to fetch submissions." });
      }
      console.log("Fetched submissions:", rows);
      res.status(200).json(rows);
    });
  });
  ;

module.exports = router;
