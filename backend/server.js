const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors()); // allow requests from frontend

const trainers = [
  {id:1,name:"John Trainer",email:"john@lms.com",course:"MERN Stack",status:"Active"},
  {id:2,name:"Sarah Trainer",email:"sarah@lms.com",course:"Python",status:"Active"}
];

app.get("/api/trainer", (req, res) => {
  res.json(trainers);
});

app.listen(5000, () => console.log("Server running on port 5000"));
