import Image from "next/image";
import React from "react";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Product({ imagepath, title, content, alt }) {
  return (
    <div className="main flex flex-col sm:flex-row   p-3">
      <div className="w-full  sm:w-[30%] pl-3">
        <Image
          className="border border-gray-500 mx-auto sm:mx-0 mb-2 sm:mb-0 rounded-[20px]"
          src={imagepath}
          width={90}
          height={90}
          alt={alt}
        />
      </div>
      <div className="w-full sm:w-[70%] flex flex-col items-start p-1 text-center sm:text-start">
        <div className="w-full  title mb-2 font-bold text-[20px] text-center sm:text-start">
          {title}
        </div>
        <div className="content mb-2">{content}</div>

        <div className="link_button w-full flex justify-center sm:justify-start sm:items-end h-full">
          <Link href={`services/${title.toLowerCase().replace(/\s+/g, "-")}`}>
            <div className="read_more_button mx-1 px-2 text-center py-[5px] block mt-1 font-medium border border-hoverlink rounded mx-1 text-[16px] text-hoverlink cursor-pointer hover:text-white transition-all duration-200 hover:bg-hoverlink ">
              Read More
              <ArrowForwardIcon className="ml-1" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
