const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const router = express.Router();

// Read admin credentials from JSON
const adminCredentials = JSON.parse(fs.readFileSync('./data/admin.json', 'utf8'));

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Validate the username and password from admin credentials
  if (username === adminCredentials.username) {
    const isPasswordValid = await bcrypt.compare(password, adminCredentials.password);
    
    if (isPasswordValid) {
      // Create JWT token
      const token = jwt.sign({ username, role: 'admin' }, process.env.SECRET_KEY, { expiresIn: '1h' });
      return res.json({ token });
    }
  }
  
  res.status(401).json({ error: "Invalid credentials" });
});

module.exports = router;
