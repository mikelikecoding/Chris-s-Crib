require("dotenv").config();
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
const path = require("path");

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

  // Serve static files (images) from the "public/images" folder
  app.use("/api/images", express.static(path.join(__dirname, "public/images")));

  // Health Check Route (Optional)
  app.get("/", (req, res) => {
    res.send("Backend is running!");
  });

  // Rate Limiting
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // 100 requests per IP per 15 minutes
  });
  app.use(limiter);

  // CORS Configuration
  const allowedOrigins = process.env.CORS_ORIGIN.split(",");
  app.use(
    cors({
      origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true); // Allow the request
        } else {
          callback(new Error("Not allowed by CORS")); // Block the request
        }
      },
      methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
      credentials: true, // Allow credentials (cookies, etc.)
    })
  );

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

  // Import and use routes
  const authRouter = require("./Routes/auth");
  const contactRouter = require("./Routes/contact");
  const loginRoute = require("./Routes/login"); // Ensure this file exists and exports the login route

  app.use("/api/auth", authRouter);
  app.use("/api/contact", contactRouter);
  app.use("/api/admin", authenticateAdmin, require("./Routes/admin")); // Protect admin routes
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
