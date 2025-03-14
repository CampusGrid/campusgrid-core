import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";



function FooterBottom() {
  return (
    <div className="bottom-footer w-full border-t  my-2  py-2">
      <div className="p-2 lg:container mx-auto flex flex-wrap lg:justify-around items-center ">
        <div className="content  text-sm font-bold">
          <span className="text-gray-400">
            Copyright © 2025 Campus Flow. All rights reserved
          </span>
        </div>
        <div className="socialLinks ml-2 flex items-center justify-around ">
          <ul className="flex">
            <li className="mx-1">
              <InstagramIcon />
            </li>
            <li className="mx-1">
              <TwitterIcon />
            </li>
            <li className="mx-1">
              <LinkedInIcon />
            </li>
          </ul>
        </div>
        <div className="mt-2 md:mt-0 terms_and_condition flex items-center text-sm ">
          <span className="mx-2 text-gray-500 font-bold hover:text-hoverlink cursor-pointer">
            Privacy and policy
          </span>
          <span className="mx-2 text-gray-500 font-bold hover:text-hoverlink cursor-pointer ">
            Terms ans conditions
          </span>
        </div>
      </div>
    </div>
  );
}

export default FooterBottom;
