const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Security & Middlewares
app.use(cors());
app.use(express.json());

// Test Route
app.get('/', (req, res) => {
  res.json({ status: 'success', message: 'Viraj Tube Backend is live and running securely!' });
});

// Server Start
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
