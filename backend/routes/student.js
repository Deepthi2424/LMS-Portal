const express = require("express");
const auth = require("../middleware/auth");
const Enrollment = require("./models/Enrollment");

const router = express.Router();

router.post("/enroll", auth, async (req, res) => {
  const enroll = new Enrollment({
    studentId: req.user.id,
    courseId: req.body.courseId
  });
  await enroll.save();
  res.json(enroll);
});

module.exports = router;
