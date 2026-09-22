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
// Short Video Upload Route
app.post('/api/upload/short', (req, res) => {
  try {
    // Handle short video upload logic here
    res.status(200).json({ success: true, message: 'Short uploaded successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

