import { useState } from "react";
import Tesseract from "tesseract.js";

const ImageToText = () => {
  const [text, setText] = useState("");

  const handleImageChange = async (event) => {
    const image = event.target.files[0];
    const { data } = await Tesseract.recognize(image);
    setText(data.text);
  };
  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <p>{text}</p>
    </div>
  );
};

export default ImageToText;
