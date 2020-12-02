import React, { useState, useEffect } from "react";
import Tesseract, { ImageLike } from "tesseract.js";

/**
 * @todo Add loader/pie chart while worker is parsing image test.
 * @todo Display text output.
 * @todo Display image.
 */

const ImageReader: React.FC = () => {
  const [image, setImage] = useState<ImageLike | null>(null);

  const handleImageUpload = (e: React.FormEvent<HTMLInputElement>): void => {
    if (e.currentTarget.files !== null) {
      console.log(e.currentTarget.files[0]);
      setImage(e.currentTarget.files[0]);
      console.log(image);
    }
  };

  useEffect(() => {
    if (image !== null) {
      Tesseract.recognize(image, "eng", { logger: (m) => console.log(m) }).then(
        ({ data: { text } }) => {
          console.log(text);
        }
      );
    }
  });

  return (
    <div>
      <h1>ImageReader</h1>
      <label htmlFor="image">Image: </label>
      <input
        id="image"
        name="image"
        onChange={handleImageUpload}
        type="file"
        accept="image/*"
        required
      />
    </div>
  );
};

export default ImageReader;
