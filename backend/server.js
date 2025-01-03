require('dotenv').config();
const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cluster = require("cluster");
const os = require("os");
const rateLimit = require("express-rate-limit");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const fs = require("fs");
const cors = require("cors");




dotenv.config();

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  console.log(`Master process is running. Spawning ${numCPUs} workers...`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} exited. Spawning a new one.`);
    cluster.fork();
  });
} else {
  const app = express();
  app.use(express.json());
  app.use(cookieParser());

  // Rate Limiting
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // 100 requests per IP per 15 minutes
  });

  app.use(limiter);

  // Admin Routes Security Middleware
  const authenticateAdmin = (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No token provided" });

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) return res.status(403).json({ message: "Invalid or expired token" });
      if (decoded.role !== "admin") return res.status(403).json({ message: "Unauthorized access" });
      req.user = decoded; // Attach user info to request
      next();
    });
  };

  // Allow requests from your frontend's origin
app.use(cors({
    origin: "http://localhost:5173", // Replace with your frontend's URL
    methods: ["GET", "POST"], // Specify allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
  }));

  // Import and use routes
  const authRouter = require("./Routes/auth");
  const contactRouter = require("./Routes/contact");

  // Admin login route to authenticate and generate token
  const loginRoute = require("./Routes/login"); // Make sure this file exists and properly exports a route
  app.use("/api/auth", authRouter);
  app.use("/api/contact", contactRouter);

  app.use("/api/admin", authenticateAdmin, require("./Routes/admin")); // Protect admin routes

  // Admin login handler
  app.use(loginRoute);

  // Error handler middleware
  app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).json({ message: "An internal server error occurred." });
  });

  const PORT = process.env.PORT || 5001;
  app.listen(PORT, () => {
    console.log(`Worker ${process.pid} running on port ${PORT}`);
  });
}
