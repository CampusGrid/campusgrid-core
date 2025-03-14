import React from "react";
import Image from "next/image";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

function Profile({ imagepath, alt, title, content }) {
  return (
    <div className="rounded-[10px] bg-white my-3 flex flex-col p-3 ">
      <div className="image w-full px-2 my-2 ">
        <div className="ml-3">
          <Image
            className="sm:mx-0 mb-2 sm:mb-0 rounded-[20px]"
            src={imagepath}
            width={90}
            height={90}
            alt={alt}
          />
        </div>
      </div>
      <div className="content w-full flex flex-col px-3">
        <div className="title mb-2">
          <span className="text-[20px] font-bold ">{title}</span>
        </div>
        <div className="points px-1 mb-1">
          {content.map((itm, indx) => {
            return (
              <div key={indx} className="mb-2 w-full">
                <span>
                  <ArrowRightIcon />
                </span>
                <span className="text-sm">{itm}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Profile;
