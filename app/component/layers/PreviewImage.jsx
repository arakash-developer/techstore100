"use client";
import Cus from "@/public/custombuild.png";
import Image from "next/image";
import { useState } from "react";

const PreviewImage = ({ newdata }) => {
  let [preview, setPreview] = useState(newdata.images[0]);
  const handlePreviewImageChange = (previewImage) => {
    setPreview(previewImage);
  };
  return (
    <div className="">
      <div className="flex gap-8 items-start">
        <div className="w-[468px] h-[468px] border ">
          <Image
            className="w-full h-full object-cover"
            src={preview}
            alt="a"
            width="500"
            height="500"
          />
        </div>
        <div className="w-[81px] flex flex-col gap-2 cursor-pointer">
          {newdata.images?.map((image) => (
            <div key={newdata._id} className="" onClick={() => handlePreviewImageChange(image)}>
              <Image
                className="w-full h-[81px] object-cover border"
                src={image}
                alt="a"
                width="100"
                height="100"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreviewImage;
