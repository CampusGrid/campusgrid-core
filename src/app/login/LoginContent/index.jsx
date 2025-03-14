"use client";

import React from "react";
import Image from "next/image";

function LoginContent() {
  return (
    <div className="w-full h-full flex items-center">
      <div className=" container  min-w-2/3 h-2/3 grid grid-rows-5 p-2">
        <div className="row-span-4 flex items-center justify-center">
          <Image className="rounded-[20px]"
            src="/images/login_content.jpg"
            width={700}
            height={700}
            alt="Meeting Pic"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginContent;
