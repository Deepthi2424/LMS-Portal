const mongoose = require("mongoose");

const EnrollmentSchema = new mongoose.Schema({
  studentId: mongoose.Schema.Types.ObjectId,
  courseId: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model("Enrollment", EnrollmentSchema);
