const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key";

// Middleware to authenticate admin
const authenticateAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Extract token from `Authorization` header

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    if (decoded.role === 'admin') {
      req.user = decoded; // Attach user info to request object
      next(); // Pass control to the next middleware
    } else {
      res.status(403).json({ error: 'Access forbidden.' });
    }
  } catch (err) {
    res.status(400).json({ error: 'Invalid token.' });
  }
};

module.exports = authenticateAdmin;
