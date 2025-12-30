const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json()); // for parsing JSON

// Connect to MongoDB
mongoose.connect("mongodb://admin:admin123@localhost:27017/lmsPortal?authSource=admin")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Trainer schema and model
const trainerSchema = new mongoose.Schema({
  name: String,
  email: String,
  course: String,
  status: String
});

const Trainer = mongoose.model("Trainer", trainerSchema);

// GET all trainers
app.get("/api/trainer", async (req, res) => {
  try {
    const trainers = await Trainer.find();
    res.json(trainers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST route to add trainer (optional)
app.post("/api/trainer", async (req, res) => {
  const { name, email, course, status } = req.body;
  const trainer = new Trainer({ name, email, course, status });
  try {
    const savedTrainer = await trainer.save();
    res.status(201).json(savedTrainer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));
