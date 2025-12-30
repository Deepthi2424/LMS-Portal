// backend/server.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://admin:admin123@127.0.0.1:27017/lmsPortal?authSource=admin")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Trainer Schema
const trainerSchema = new mongoose.Schema({
  name: String,
  email: String,
  course: String,
  status: String
});

const Trainer = mongoose.model("Trainer", trainerSchema);

// API to get all trainers
app.get("/api/trainer", async (req, res) => {
  try {
    const trainers = await Trainer.find();
    res.json(trainers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));

// server.js
app.get("/api/courses/:trainerId", async (req, res) => {
  const trainerId = req.params.trainerId;
  try {
    const courses = await Course.find({ trainerId });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
