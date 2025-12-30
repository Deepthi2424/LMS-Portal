const mongoose = require("mongoose");

const trainerSchema = new mongoose.Schema({
  name: String,
  email: String,
  course: String,
  status: String
});

module.exports = mongoose.model("Trainer", trainerSchema);
