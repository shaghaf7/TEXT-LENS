# 🧠 TextLens

**TextLens** is a full-stack web application that uses **Tesseract.js** to extract text from uploaded images. With an intuitive UI and seamless backend processing, it converts visual information into editable and copyable text.

> ✨ Harness the power of visualization – from image to text in seconds!

---

## 🔧 Tech Stack

### 🖼️ Frontend
- React
- Redux
- Tailwind CSS

### ⚙️ Backend
- Node.js
- Express.js
- Tesseract.js

### ☁️ Cloud Storage
- Cloudinary

---

## 🚀 Getting Started – Run Locally

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
Add the following environment variables to your .env file in the server folder

PORT
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET


3. **Access the Application**:

   Open your browser and navigate to `http://localhost:3000` to use TextLens.

## Configuration

Ensure you have a Cloudinary account and set up the necessary environment variables for media storage. Refer to the Cloudinary documentation for detailed instructions.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.
