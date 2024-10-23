import { useState, useRef, useEffect } from "react";
import axios from "axios";
import Clipboard from "clipboard";
import Heading from "./components/Heading";
import SubHeading from "./components/SubHeading";
import Spinner from "./components/Spinner";

const App = () => {
  const [text, setText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const textareaRef = useRef(null);

  const handleCopyToClipboard = () => {
    if (textareaRef.current) {
      textareaRef.current.select();
      document.execCommand("copy");
      alert("Text copied to clipboard!");
    }
  };

  useEffect(() => {
    new Clipboard(".copy-btn");
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    alert("Processing image. Please Wait :)");
    const formData = new FormData();
    formData.append("file", event.target.file.files[0]);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/extractTextFromImage`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setText(response.data.text);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen font-poppins text-sm">
      <Heading content="TextLens" />
      <SubHeading content="Effortlessly extract text from images using Tesseract.js and Cloudinary!" />
      
      <div className="flex flex-col justify-between p-4 rounded bg-gray-100 mt-4 w-3/4 sm:w-1/2 shadow-lg">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center"
        >
          <label htmlFor="file" className="font-semibold mb-4">
            Upload Your Image
          </label>
          <input
            type="file"
            name="file"
            id="file"
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
            onChange={handleImageChange}
            accept="image/*"
          />
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full mt-4 rounded-md object-cover max-h-64"
            />
          )}
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none disabled:bg-gray-400"
            disabled={loading}
          >
            Submit
          </button>
        </form>

        <div className="mt-6">
          <label htmlFor="text" className="font-semibold">
            Extracted Text:
          </label>
          {loading ? (
            <Spinner />
          ) : (
            <textarea
              id="text"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md h-40"
              value={text}
              readOnly
              ref={textareaRef}
            ></textarea>
          )}
          <button
            type="button"
            className="copy-btn mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
            data-clipboard-target="#text"
            onClick={handleCopyToClipboard}
          >
            Copy to Clipboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
