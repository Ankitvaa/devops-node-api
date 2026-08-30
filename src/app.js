const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const healthRoutes = require("./routes/health.routes");

const app = express();

// Security middleware
app.use(helmet());

// CORS
app.use(cors());

// JSON parser
app.use(express.json());

// Health routes
app.use("/api/health", healthRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "DevOps Node API is running"
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    success: false,
    message: "Internal server error"
  });
});

module.exports = app;
