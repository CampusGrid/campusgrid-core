import React from "react";

function HompageExploreBtns({ sectionId, name, scrollToSection }) {
  return (
    <div className="my-2">
      <span 
        className={`${
          sectionId == "features"
            ? "border border-hoverlink hover:text-white transition-all duration-200 hover:bg-hoverlink"
            : "bg-hoverlink text-white "
        } p-[16px] text-[16px] font-bold text-center my-2 rounded mx-2 cursor-pointer`}
        onClick={scrollToSection}
      >
        {name}
      </span>
    </div>
  );
}

export default HompageExploreBtns;
