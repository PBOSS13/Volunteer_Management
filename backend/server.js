const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api", require("./routes/routes")); // Updated to use the main routes file

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ 
    message: "Internal Server Error", 
    error: process.env.NODE_ENV === 'development' ? err.message : undefined 
  });
});

// Export the app object for testing
if (require.main === module) {
    connectDB().then(() => {
        const PORT = process.env.PORT || 5001;
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
            console.log(`MongoDB URI: ${process.env.MONGO_URI}`);
        });
    }).catch(err => {
        console.error('Failed to start server:', err);
        process.exit(1);
    });
}

module.exports = app;
