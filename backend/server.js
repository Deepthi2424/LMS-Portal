const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json()); // Needed for POST requests

// MongoDB connection
mongoose.connect("mongodb://admin:admin123@localhost:27017/lmsPortal?authSource=admin", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Trainer schema
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

app.listen(5000, () => console.log("Server running on port 5000"));
