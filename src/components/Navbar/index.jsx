"use client";
import React from "react";
import Link from "next/link";
import Style from "./navbar.module.css";
import { useState, useEffect } from "react";
import data from "./data.json";
import BurgerIcon from "./bugerIcon";
import MobileScreenNavList from "./MobileScreenNavList";
import { useScroll } from "@/context/ScrollContext";

import NavEssentialButton from "./NavEssentialButton"
import { AuthProvider } from "@/context/AuthContext";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobileListOpen, setIsMobileListOpen] = useState(false);
  const { scrollToSection } = useScroll();

  useEffect(() => {
    const handleResize = () => {
       
      if (window.innerWidth >= 1200) {
        setShowMenu(true);
        setIsMobileListOpen(false);
      } else {
        setShowMenu(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div
        className={`${Style.main} w-full h-[94px] z-50 border-b border-gray-300 shadow-md`}
      >
        <div className={`mx-auto px-[1rem] lg:px-[2rem] h-full`}>
          <div className="flex justify-between items-center   h-full lg:px-[1rem] gap-4 mb-3">
            <div className="logo text-2xl font-bold flex-3  h-full flex items-center mb-1">
              <Link href="/">
                <span className="px-3 py-4 text-white bg-[#15A3EF] rounded-[10px] cursor-pointer">
                  Campus Flow
                </span>
              </Link>
            </div>
            {showMenu ? (
              <div className=" flex-1 mx-2 h-full">
                <ul className="flex items-center flex-start mx-2 h-full ">
                  {data.navList.map((itm, index) => {
                    return (
                      <li
                        key={index}
                        className={`${Style.linkLists} h-full mx-3 px-2 flex items-center cursor-pointer`}
                        onClick={() => scrollToSection(itm.id)}
                      >
                        <span className="font-bold text-sm">
                          {itm.name
                            .split("_")
                            .map((word) => word.toUpperCase())
                            .join(" ")}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              <div
                className="cursor-pointer p-2 xl:hidden"
                onClick={() => setIsMobileListOpen(!isMobileListOpen)}
              >
                <BurgerIcon isMobileListOpen={isMobileListOpen} />
              </div>
            )}

            {showMenu && (
              <div className="loginsystem flex p-2  flex-3 h-full">
                <ul className="flex items-center justiy-center mx-2 h-full">
                  {data.loginSystem.map((itm, index) => {
                    return (
                      <AuthProvider>
                      <NavEssentialButton key={index} essential = {itm} scrollToSection={scrollToSection}/>
                      </AuthProvider>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      {!showMenu && isMobileListOpen}
    </>
  );
}

export default Navbar;
