# TextLens

TextLens is a web-based application that processes and analyzes text from images or documents using Optical Character Recognition (OCR) and Natural Language Processing (NLP) techniques. It allows users to upload media, extract text, and perform tasks such as translation, sentiment analysis, and keyword extraction. The application integrates Cloudinary for efficient media storage and management.

## Features

- **Text Extraction**: Upload images or documents to extract text using OCR.
- **Translation**: Translate extracted text into multiple languages.
- **Sentiment Analysis**: Analyze the sentiment of the extracted text to determine its tone.
- **Keyword Extraction**: Identify and extract key terms from the text.
- **Media Management**: Efficiently store and manage uploaded media using Cloudinary.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/shaghaf7/TEXT-LENS.git
   cd TEXT-LENS
   ```

2. **Navigate to the Client Directory**:

   ```bash
   cd client
   ```

3. **Install Client Dependencies**:

   ```bash
   npm install
   ```

4. **Navigate to the Server Directory**:

   ```bash
   cd ../server
   ```

5. **Install Server Dependencies**:

   ```bash
   npm install
   ```

## Usage

1. **Start the Client**:

   ```bash
   cd client
   npm start
   ```

2. **Start the Server**:

   ```bash
   cd ../server
   npm start
   ```

3. **Access the Application**:

   Open your browser and navigate to `http://localhost:3000` to use TextLens.

## Configuration

Ensure you have a Cloudinary account and set up the necessary environment variables for media storage. Refer to the Cloudinary documentation for detailed instructions.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.
