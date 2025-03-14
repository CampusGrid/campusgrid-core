import React from "react";
import Image from "next/image";

function Feature({ imagepath, title, content, alt }) {
  return (
    <>
      <div className="border-2 border-dotted border-gray-500 flex flex-col p-2">
        <div className="w-fullimage_div flex justify-center items-center my-2">
          <Image
            className="rounded-[20px]"
            src={imagepath}
            width={80}
            height={80}
            alt={alt}
          />
        </div>
        <div className="w-fullimage_div  font-bold text-[18px] my-2 text-center">
          {title}
        </div>
        <div className="w-fullimage_div text-center">
          {content}
        </div>
      </div>
    </>
  );
}

export default Feature;
