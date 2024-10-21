const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const textRoutes = require('./routes/textRoutes');  // Import routes

dotenv.config();  // Load .env variables

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', textRoutes);  // API endpoint for text extraction

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
