require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const authRoutes=require("./routes/authroutes")
const app = express();

// Middleware
app.use(express.json()); // should come first, before routes
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
connectDB()
app.use("/api/auth",authRoutes)

// Routes (commented out by you)
// app.use("/api/auth", authroutes);
// app.use("/api/users", userroutes);
// app.use("/api/tasks", taskroutes);
// app.use("/api/reports", reportroutes);

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`App is running at the port ${port}`);
});
