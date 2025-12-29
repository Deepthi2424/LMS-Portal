// backend/server.js

const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // parse JSON bodies

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../frontend')));

// Import your routers
const authRouter = require('./routes/auth');      // adjust if your file name is different
const trainerRouter = require('./routes/trainer');

// API routes
app.use('/api/auth', authRouter);
app.use('/api/trainer', trainerRouter);

// Catch-all route: send login.html for other frontend routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/login.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


