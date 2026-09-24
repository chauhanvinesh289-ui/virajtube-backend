
// Multer Video Upload Route for Shorts
const multer = require('multer');
const upload = multer({ dest: 'uploads/temp/' });

app.post('/api/upload/short', upload.single('video'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No video provided' });
  }
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

