const mongoose = require("mongoose");

const ModuleSchema = new mongoose.Schema({
  courseId: mongoose.Schema.Types.ObjectId,
  title: String,
  videos: [String],
  notes: [String],
  links: [String]
});

module.exports = mongoose.model("Module", ModuleSchema);
