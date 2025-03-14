import React from "react";

function BurgerIcon({ isMobileListOpen }) {
  return (
    <>
      <div
        className={`bg-black h-[3px] w-6 rounded transition-all duration-300 ${
          isMobileListOpen ? "rotate-45 translate-y-2" : ""
        }`} 
      />
      <div
        className={`bg-black h-[3px] w-6 rounded transition-all duration-300 mt-1 ${
          isMobileListOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`bg-black h-[3px] w-6 rounded transition-all duration-300 mt-1 ${
          isMobileListOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      />
    </>
  );
}

export default BurgerIcon;
