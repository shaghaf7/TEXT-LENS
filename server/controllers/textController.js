const tesseract = require('tesseract.js');

// Controller to extract text from uploaded image
const extractTextFromImage = async (req, res) => {
  try {
    const imageUrl = req.file.path;  // Cloudinary URL of the uploaded image
    const {
      data: { text },
    } = await tesseract.recognize(imageUrl, 'eng');  // Tesseract.js text extraction
    res.json({ text });
  } catch (error) {
    console.error("Error extracting text:", error);
    res.status(500).json({ error: 'Failed to extract text from image' });
  }
};

module.exports = { extractTextFromImage };
