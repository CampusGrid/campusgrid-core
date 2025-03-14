"use client";

import { useScroll } from "@/context/ScrollContext";

import Image from "next/image";
import Feature from "../FeatureContainer";
import Product from "../Products";
import Data from "../../../public/data/homepageData.json";
import Link from "next/link";
import Profile from "../Profile";
import Faqs from "./Faqs";
import RequestDemoForm from "../RequestDemoForm";
import HompageExploreBtns from "../UI/HompageExploreBtns";

function HomePageBanner() {
  const { sectionRefs, scrollToSection } = useScroll();
  return (
    <>
      <div className="w-full h-[514px] mb-4 relative">
        <div className="banner_main w-full h-full  overflow-hidden relative rounded">
          <Image
            src="/banner/school3.jpg"
            layout="fill"
            objectFit="cover"
            alt="School Banner"
          />
        </div>
      </div>

      <div
        className="content flex flex-col lg:flex-row w-full p-3 mb-4"
        ref={sectionRefs.features}
      >
        <div className="w-full lg:w-[30%] p-3 flex items-center justify-center">
          <div className="w-50">
            <h2 className="font-bold text-4xl">
              What is School ERP Software ?
            </h2>
          </div>
        </div>
        <div className="w-full lg:w-[70%]  p-3">
          <div className=" container mx-auto">
            <p className="block ">
              Enterprise Resource Planning (ERP) Software is a comprehensive
              platform for schools designed to streamline various school
              operations. ERP for Schools platform effortlessly upgrades SIS,
              fee management, admission management, transport management,
              attendance, grades, communication, and other administrative
              functions.
            </p>
            <br />
            <p>
              School ERP Software aims to enhance efficiency, communication, and
              data management. The best ERP software for schools provides a
              centralized system for administrators, teachers, parents, and
              students to access relevant information and collaborate
              effectively.
            </p>
          </div>
        </div>
      </div>
      <div className="content flex flex-col w-full mb-4">
        <div className="key_features flex justify-center items-center">
          <div className="w-[70%] p-2 text-center">
            <span className="font-bold text-3xl py-2 font-bold">
              Key Features of School Management ERP Software
            </span>
          </div>
        </div>
      </div>
      <div className="key_features flex justify-center items-center my-2 mb-4">
        <div className="w-[60%] p-2 text-center">
          <span className="text-gray-500">
            Campus Flow Integrated ERP School Management Platform eases the
            transformation of school processes and empowers schools, teachers,
            students, and parents.
          </span>
        </div>
      </div>

      <div className="block_features w-full mb-4">
        <div className="features w-5/6 mx-auto p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Data.features.map((feat, index) => {
            return (
              <Feature
                key={index}
                imagepath={feat.imagePath}
                title={feat.title}
                content={feat.content}
                alt={feat.alt}
              />
            );
          })}
        </div>
        <div className="demo_button w-full p-3 flex justify-center items-center">
          <HompageExploreBtns
            sectionId="scheduleDemo"
            name="Request Demo"
            scrollToSection={() => {
              scrollToSection("scheduleDemo");
            }}
          />
        </div>
        <div className="erp_module w-full  p-3">
          <div className="main w-full lg:w-[80%] xl:w-[70%] mx-auto my-2 flex flex-col">
            <div className="title w-full text-center">
              <span className="font-bold text-3xl">
                Customizable & Advanced ERP Modules for Schools
              </span>
            </div>
            <div className="content mx-auto my-2 w-full lg:w-[80%] xl:w-[60%] text-center p-3">
              <span>
                Looking for the best user-friendly dashboards, well-structured
                analysis reports, and easy navigation benefits within School ERP
                modules? Campus Flow delivers the best School ERP with
                exceptional modules for schools, institutes, and other
                educational firms. Campus Flow ERP Modules are tailored for
                various school types (CBSE, IB, ICSE, State Board) and integrate
                requisite educational ERP modules for seamless operations.
              </span>
            </div>
          </div>
        </div>
        <div className="products_and_features w-full flex flex-col"> </div>
      </div>
      <div
        className="product_and_services w-full mb-4"
        ref={sectionRefs.services}
      >
        <div className="heading w-full text-center mx-auto">
          <span className="font-bold text-hoverlink text-2xl tracking-[0.40rem] ">
            OUR PRODUCTS & SERVICES
          </span>
        </div>
        <div className="products w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-3">
          {Data.products.map((itm, index) => {
            return (
              <Product
                key={index}
                imagepath={itm.imagePath}
                title={itm.title}
                content={itm.content}
                alt={itm.alt}
              />
            );
          })}
        </div>
        <div className="main w-full  mb-4 p-3">
          <div className="mx-auto p-2 flex flex-col">
            <span className="block text-center text-3xl font-bold mb-2">
              Empower Your School Today{" "}
            </span>
            <span className="text-center text-3xl font-bold">
              with Campus Flow Tailored School ERP Modules!
            </span>
          </div>
          <div className="w-full buttons flex justify-center items-center my-2">
            <HompageExploreBtns
              sectionId="scheduleDemo"
              name="Schedule A Demo Now"
              scrollToSection={() => {
                scrollToSection("scheduleDemo");
              }}
            />
            <HompageExploreBtns
              sectionId="features"
              name="Explore All Features"
              scrollToSection={() => {
                scrollToSection("features");
              }}
            />

            {/* <span
              className="p-[16px] text-[12px] font-bold rounded border border-hoverlink hover:text-white transition-all duration-200 hover:bg-hoverlink cursor-pointer"
              onClick={()=>{scrollToSection("features")}}
            >
              Explore All Features
            </span> */}
          </div>
        </div>
      </div>
      <div className="w-full bg-bannerhomepage mb-4 p-3 grid grid-cols-1">
        <div className="heading  py-2 flex flex-col mx-auto w-[90%] ">
          <span className="text-2xl font-bold block mb-2">
            Role-based Benefits of Campus Flow ERP Software for Schools
          </span>
          <p className="w-full lg:w-1/2">
            Campus Flow ERP for Schools integrated platform benefits educational
            institutes on a large scale including school management, teachers,
            students, and parents.
          </p>
        </div>
        <div className="w-full  py-2 ">
          <div className="mx-auto w-[90%]  grid  md:grid-cols-2 lg:grid-cols-4 gap-3">
            {Data.profile.map((itm, index) => {
              return (
                <Profile
                  key={index}
                  imagepath={itm.imagePath}
                  title={itm.title}
                  content={itm.points}
                  alt={itm.alt}
                />
              );
            })}
          </div>
        </div>
        <div className="end w-full text-center">
          <div className="content text-2xl font-bold">
            Experience Future of Education Management
          </div>
          <div className="content text-2xl font-bold">
            with Campus Flow ERP for Schools!
          </div>
          <div className="flex justify-center items-center my-2">
            <HompageExploreBtns
              sectionId="scheduleDemo"
              name="Get A Free Demo Now"
              scrollToSection={() => {
                scrollToSection("scheduleDemo");
              }}
            />
          </div>
        </div>
      </div>
      <div className="faqs w-full mb-4">
        <Faqs />
      </div>

      <div
        className="bool_a_demo  w-full bg-hoverlink"
        ref={sectionRefs.scheduleDemo}
      >
        <div className="mx-auto w-full lg:w-[80%]  mt-3 flex flex-col  justify-between lg:flex-row p-3 gap-y-3 lg:gap-x-3">
          <div className=" mx-auto information row-span-3 lg:col-span-3 ">
            <RequestDemoForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePageBanner;
