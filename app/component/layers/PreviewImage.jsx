"use client";
import Image from "next/image";
import { useState } from "react";

const PreviewImage = ({ newdata }) => {
  let [preview, setPreview] = useState(newdata.images[0]);
  const handlePreviewImageChange = (previewImage) => {
    setPreview(previewImage);
  };

  return (
    <div className="cursor-pointer">
      <div className="flex">
        <p>{newdata.title}</p>
        {newdata.images?.map((image) => (
          <div
            className=""
            onClick={() => handlePreviewImageChange(image)}
          >
            <Image src={image} alt="a" width="100" height="100" />
          </div>
        ))}
      </div>

      <div className="mt-3">
        <Image src={preview} alt="a" width="500" height="500" />
      </div>
    </div>
  );
};

export default PreviewImage;
