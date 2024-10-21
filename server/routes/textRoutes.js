const express = require('express');
const { extractTextFromImage } = require('../controllers/textController');
const upload = require('../config/cloudinaryConfig');  // Cloudinary configuration

const router = express.Router();

// Route to handle image upload and text extraction
router.post('/extractTextFromImage', upload.single('file'), extractTextFromImage);

module.exports = router;
