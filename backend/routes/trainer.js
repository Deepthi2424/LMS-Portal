const express = require("express");
const auth = require("../middleware/auth");
const Course = require("../models/Course");
const Module = require("../models/Module");
const Enrollment = require("../models/Enrollment");

const router = express.Router();

router.post("/course", auth, async (req, res) => {
  if (req.user.role !== "trainer")
    return res.status(403).send();

  const course = new Course({
    ...req.body,
    trainerId: req.user.id
  });
  await course.save();
  res.json(course);
});

router.post("/module", auth, async (req, res) => {
  const module = new Module(req.body);
  await module.save();
  res.json(module);
});

router.get("/students/:courseId", auth, async (req, res) => {
  const students = await Enrollment.find({ courseId: req.params.courseId });
  res.json(students);
});

module.exports = router;
