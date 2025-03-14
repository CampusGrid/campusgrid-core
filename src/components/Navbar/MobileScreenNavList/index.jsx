"use client";
import React from "react";
import Link from "next/link";
import Style from "./style.module.css";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


function MobileScreenNavList() {
  const itemList = [
    {
      name: "products",
      subItems:[]
    },
    {
      name: "services",
      subItems:[]
    },  
    {
      name: "about-us",
    },

    {
      name: "contact-us",
    },


  ];

  return (
    <>
      <div className={`${Style.main}`}>
        <div className={`${Style.list}`}>
            {itemList.map((item, index) => (
               <li className={`${Style.item} flex  items-center`} key={index}>
            <div className="flex items-center w-full bg-[rgb(11, 11, 12)] ">
              <div className="flex items-center justify-between w-full fit gap-[4px] relative">
                <span className="text-[1.25rem] font-bold cursor-pointer px-[1.5rem] py-[1rem]  block w-full transform-none align-left hover:text-linkHover">
                    <Link href={`/${item.name}`}>{item.name.split("-").map(item=>item.charAt(0).toUpperCase()+item.slice(1)).join(" ")}</Link>
                </span>
                {item?.subItems && <div className="flex items-center justify-center text-white pr-[1.5rem]">
                </div>}

              </div>
            </div>
            </li>
            ))}
        </div>
        <div className="my-5 connecting_buttons flex md:flex-row flex-col gap-4 items-center pt-[1rem] px-[1.5rem] justify-end">
          <Link href="/login" className="text-white w-full mx-0 my-2 px-[8px] py-[12px] h-[40px] font-bold text-center  hover:text-blue-400 rounded-md">Login</Link>
          <Link href="/demo" className=" flext text-white w-full mx-0 my-2 px-[8px] py-[8px] h-[40px] font-bold text-center border hover:bg-white hover:text-black rounded-md">Let's Talk</Link>  
          <Link href="/signup" className={`text-white w-full mx-0 my-2 px-[8px] py-[8px] h-[40px] font-bold text-center border ${Style.signupButton} rounded-md`}>Sign Up</Link>

        </div>
      </div>
    </>
  );
}

export default MobileScreenNavList;
