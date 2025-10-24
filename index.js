const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000; // Changed to port 5000 to avoid conflict with frontend

// Connect to DB and only start server after successful connection
connectDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}).catch(err => {
  console.error('❌ Failed to connect to MongoDB:', err);
  process.exit(1);
});

// Middleware
app.use(cors());
app.use(express.json());

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('❌ Error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Routes
const sessionRoutes = require("./Routes/sessionRoutes");
app.use("/", sessionRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Cannot ${req.method} ${req.originalUrl}`
  });
});

// For debugging routes
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Test route
app.get("/", (req, res) => {
  res.send("🐄 Milking Tracker API running...");
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
