"use client";
import React from "react";
import Data from "./data.json";
import Image from "next/image";


function Services({ serviceName }) {
  console.log(serviceName);
  return (
    <div className="w-full  flex flex-col">
      <div className="title text-center my-2 ">
        <span className="font-bold text-hoverlink text-3xl">
          {serviceName
            .replace(/%/g, " ")
            .split("-")
            .map((itm) => itm[0].toUpperCase() + itm.slice(1))
            .join(" ")}
        </span>
      </div>
      <div className=" mx-auto w-[80%] flex flex-col md:flex-row   ">
        <div
          className="w-full lg:w-[30%] bg-gray-200  flex items-center justify-center  bg-[#fff]  mx-3  flex items-start">
            <Image
            src="/services/services.jpg"
            className="h-full w-full"
            width={800} 
            height={800}
            alt={serviceName}
          />
        </div>
        <div className="content w-full lg:w-[70%]   flex flex-col p-2 items-center lg:items-start">
          <div className="content w-full   flex flex-col mx-2 lg:mt-3">
            {Data.products
              .filter((itm) => itm.name === serviceName)
              .map((itm) => {
                return itm.content.map((points) => {
                  return (
                    <p className="my-2">
                      {" "}
                      <span className="font-bold">{points.title}</span>{" "}
                      <span>{points.content}</span>{" "}
                    </p>
                  );
                });
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
