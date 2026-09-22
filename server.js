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

// Add this to your Render backend (server.js):
const multer = require('multer');
const upload = multer({ dest: 'uploads/temp/' });

app.post(['/api/upload/short', '/upload/short'], upload.single('video'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No video provided' });
  const videoId = 'vid_' + Date.now();
  res.status(201).json({
    message: 'Uploaded successfully',
    video: { 
      id: videoId, 
      title: req.body.title || 'Short', 
      duration: '15.00',
      status: 'READY', 
      videoUrl: `/uploads/${req.file.filename}` 
    },
    jobId: 'job_' + videoId
  });
});
