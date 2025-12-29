const mongoose = require("mongoose");

const ProgressSchema = new mongoose.Schema({
  studentId: mongoose.Schema.Types.ObjectId,
  moduleId: mongoose.Schema.Types.ObjectId,
  completed: Boolean
});

module.exports = mongoose.model("Progress", ProgressSchema);
