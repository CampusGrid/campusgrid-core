"use client"

import React from "react";
import Link from "next/link";
import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import Login from "./Login"




function LoginForm() {
  return (
    <>
      <div className="form_login_content  w-full h-full flex flex-col  p-2">
        <div className="section flex justify-between w-full mt-2 px-[2rem] py-2">
          <div className="logo   flex items-center">
            <div className="font-bold text-2xl px-2 py-3 bg-hoverlink text-white rounded cursor-pointer">
              <Link href="/">CAMPUS FLOW</Link>
            </div>
          </div>
          <div className="go_back_link flex items-center p-2">
            <Link
              href="/"
              className="group flex items-center text-center text-blue-600 cursor-pointer"
            >
              <ArrowBackSharpIcon className="transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
              <span className="text-[20px] text-hoverlink font-bold ml-2">
                Go Back
              </span>
            </Link>
          </div>
        </div>
        <div className="login_form w-full h-full  flex items-center justify-center ">
          <Login/>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
