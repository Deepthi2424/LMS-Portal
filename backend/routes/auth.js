const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("./models/User");
const { jwtSecret } = require("../config");

const router = express.Router();

router.post("/login", async (req, res) => {
  const user = await User.findOne(req.body);
  if (!user) return res.status(401).json({ msg: "Invalid" });

  const token = jwt.sign(
    { id: user._id, role: user.role },
    jwtSecret
  );

  res.json({ token, role: user.role });
});

module.exports = router;
