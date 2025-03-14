import React from "react";
import Link from "next/link";

function Footerup() {
  return (
    <div className="main-footer flex flex-wrap lg:w-3/4 justify-around w-full mx-auto p-2  mt-3">
      <div className="content_1 w-full md:w-1/2 xl:w-1/4 flex flex-col   p-3">
        <div className="logo pb-2 w-full cursor-pointer">
          <span className="text-2xl font-bold my-2">Campus Flow</span>
        </div>
        <div className="company_content mt-2 w-5/6">
          <p className=" text-sm">
            Amplify your school with the most credible cloud based management
            software to administer your school more efficiently by digitalising
            and automating day to day academic and administrative activities.
          </p>
        </div>
      </div>
      <div className="content_2 w-full md:w-1/2 xl:w-1/4  flex flex-col justify-enter  p-3">
        <div className="contact_info w-full">
          <span className="text-2xl ">Contact Information</span>
        </div>
        <div className="w-full flex flex-col my-2">
          <div className="mt-2">
            {" "}
            <span className="font-bold ">A: Sector 62 Noida</span>
          </div>
          <div className="mt-2">
            {" "}
            <span className="font-bold ">M: +919870692791 </span>
          </div>
          <div className="mt-2">
            {" "}
            <span className="font-bold ">E: sarthakofficial920@gmail.com</span>
          </div>
          <div className="mt-2">
            {" "}
            <span className="font-bold ">T: 10AM-6PM</span>
          </div>
        </div>
      </div>
      <div className="content_3  w-full md:w-1/2 xl:w-1/4 flex flex-col justify-enter  p-3">
        {" "}
        <div className="qucik_links w-full">
          <span className="text-2xl  ">Quick Links</span>
        </div>
        <div className="w-full flex flex-col mt-2">
          <Link href="/about">
            <span className="text-sm hover:text-[#15A3EF] font-bold">
              About Us
            </span>
          </Link>
        </div>
        <div className="w-full flex flex-col mt-2">
          <Link href="/our-services">
            <span className="text-sm hover:text-[#15A3EF] font-bold">
              Our Services
            </span>
          </Link>
        </div>
        <div className="w-full flex flex-col mt-2">
          <Link href="/advantages-of-school-erp">
            <span className="text-sm hover:text-[#15A3EF] font-bold">
              Advantages of school ERP
            </span>
          </Link>
        </div>
        <div className="w-full flex flex-col mt-2">
          <Link href="/faq">
            <span className="text-sm hover:text-[#15A3EF] font-bold">FAQs</span>
          </Link>
        </div>
      </div>
      <div className="content_4  w-full md:w-1/2 xl:w-1/4  flex flex-col justify-enter p-3   ">
        {" "}
        <div className="cotact_us w-full">
          <span className="text-2xl">Products</span>
          <div className="flex flex-col w-full mt-2">
            <div className="w-full flex flex-col mt-2">
              <Link href="/faculty-management-system">
                <span className="text-sm hover:text-[#15A3EF] font-bold">
                  Faculty Management System
                </span>
              </Link>
            </div>
            <div className="w-full flex flex-col mt-2">
              <Link href="/student-management-system">
                <span className="text-sm hover:text-[#15A3EF] font-bold">
                  Student Management System{" "}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footerup;
