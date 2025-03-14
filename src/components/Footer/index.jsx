import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FooterBottom from "./FooterBottom";
import FooterUp from "./FooterUp";

function Footer() {
  return (
    <div className="main flex flex-col w-full pt-2 border-t z-100">
      <FooterUp />
      <FooterBottom />
    </div>
  );
}

export default Footer;
