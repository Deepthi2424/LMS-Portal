const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection (Docker / local)
mongoose.connect("mongodb://127.0.0.1:27017/lmsPortal")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("Mongo error:", err));

// Trainer schema
const trainerSchema = new mongoose.Schema({
  name: String,
  email: String,
  course: String,
  status: String
});

const Trainer = mongoose.model("Trainer", trainerSchema);

// API route
app.get("/api/trainer", async (req, res) => {
  try {
    const trainers = await Trainer.find();
    res.json(trainers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Root route (to avoid Cannot GET /)
app.get("/", (req, res) => {
  res.send("LMS Backend Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
