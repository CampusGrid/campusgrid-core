"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Data from "./data.json";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import ArrowDropUpSharpIcon from "@mui/icons-material/ArrowDropUpSharp";
import { useAuth } from "@/context/AuthContext";

function DashboardNavbar() {
  const { logout } = useAuth();
  const pathname = usePathname();
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  // Keep submenu open if an active sub-item exists after refresh
  useEffect(() => {
    const activeIndex = Data.navlist.findIndex(
      (itm) => itm.subList && itm.subList.some((sub) => pathname === sub.link)
    );
    if (activeIndex !== -1) {
      setOpenMenuIndex(activeIndex);
    }
  }, [pathname]);

  const handleMenuToggle = (index) => {
    setOpenMenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleLogOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <aside className="fixed top-0 left-0  h-full w-[20%] md:w-64 sm:w-[30%] xs:w-[40%] bg-white border-r border-gray-100" style={{ zIndex: 10 }}>
      <div className="h-full">
        <div className="heading w-full text-center mb-4 my-2 p-2">
          <Link href="/">
            <div className="p-2 text-center bg-hoverlink rounded cursor-pointer">
              <h2 className="text-lg font-semibold text-white text-2xl">CAMPUS GRID</h2>
            </div>
          </Link>
        </div>

        <ul>
          {Data.navlist.map((itm, index) => {
            const isSubActive = itm.subList?.some((sub) => pathname === sub.link);
            const isSubMenuOpen = openMenuIndex === index;

            return (
              <div key={index} className="w-full flex flex-col">
                {itm.subList && itm.subList.length > 0 ? (
                  <>
                    {/* Main Dropdown Item (No highlight) */}
                    <li
                      className="mb-2 py-2 px-3 flex justify-between cursor-pointer transition-all duration-300 my-2"
                      onClick={() => handleMenuToggle(index)}
                    >
                      <span className="hover:text-hoverlink font-bold">
                        {itm.title.charAt(0).toUpperCase() + itm.title.slice(1)}
                      </span>
                      {isSubMenuOpen ? <ArrowDropUpSharpIcon /> : <ArrowDropDownSharpIcon />}
                    </li>

                    {/* Submenu Items */}
                    {isSubMenuOpen && (
                      <div className="transition-all duration-500 overflow-hidden min-h-20 opacity-100">
                        <ul>
                          {itm.subList.map((sub, subIndex) => {
                            const isSubItemActive = pathname === sub.link;

                            return (
                              <Link key={subIndex} href={sub.link}>
                                <li
                                  className={`mb-2 py-2 px-3 text-sm cursor-pointer rounded font-bold transition-colors duration-300
                                    ${isSubItemActive ? "bg-gray-200 text-hoverlink border-l-4 border-hoverlink" : ""}
                                    hover:bg-gray-100 hover:text-hoverlink`}
                                  // Don't close dropdown on sublist click
                                >
                                  {sub.title.charAt(0).toUpperCase() + sub.title.slice(1)}
                                </li>
                              </Link>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </>
                ) : itm.title.toLowerCase() !== "logout" ? (
                  <Link href={itm.link}>
                    {/* Main List Item (Closes dropdown if no sublist) */}
                    <li
                      className={`mb-2 py-2 px-3 cursor-pointer transition-all duration-300 
                        ${pathname === itm.link ? "bg-gray-200 text-hoverlink border-r-4 border-hoverlink" : ""}
                        hover:bg-gray-100`}
                      onClick={() => setOpenMenuIndex(null)} // Close dropdown only when clicking a main item without a sublist
                    >
                      <span className="hover:text-hoverlink font-bold">
                        {itm.title.charAt(0).toUpperCase() + itm.title.slice(1)}
                      </span>
                    </li>
                  </Link>
                ) : (
                  <li
                    className="mb-2 py-2 px-3 cursor-pointer text-red-500 font-bold hover:bg-gray-100"
                    onClick={handleLogOut}
                  >
                    Logout
                  </li>
                )}
              </div>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

export default DashboardNavbar;
