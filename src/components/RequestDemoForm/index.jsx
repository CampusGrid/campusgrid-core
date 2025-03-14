"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import FormInput from "../FormInput";
import * as Yup from "yup";
import { RequestDemoSchema } from "@/schemas/requestDemoSchema";
import Data from "./data.json";
import SubmitButton from "../UI/SubmitButton";

function RequestDemoForm() {
  const onSubmit = () => {
    console.log("submitted");
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        phoneNumber: "",
        media: "",
        service: "",
        timeToReach: "",
        additionalInfo: "",
      },
      validationSchema: RequestDemoSchema,
      onSubmit,
    });

  return (
    <div className="w-full p-2 flex flex-col">
      <div className="heading flex flex-col">
        <div className=" w-full title font-bold text-center text-3xl  mb-2">
          <span className="text-white">Get in touch with us</span>
        </div>
        <div className="content w-full text-center flex flex-col text-white">
          <span className="text-white">
            Ready to experience the power of campus flow School Management
            Software? Get in touch with us
          </span>
          <span className="text-white">
            for personalized consultations or schedule a demo.
          </span>
        </div>
      </div>
      <form className="form-control my-2" action="">
        <div className="form_container grid grid-cols-2 gap-3  p-2">
          {Data.formFields.map((itm, index) => {
            return (
              <FormInput
                key={index}
                label={itm.label}
                name={itm.name}
                type={itm.type}
                placeholder={itm.placeholder}
                errors={errors}
                touched={touched}
                values={values}
                handleChange={handleChange}
              />
            );
          })}
        </div>
        <div className="grid grid-cols-1">
          <textarea
            name="additionalInfo"
            className="w-full p-2  border  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
        </div>
          <div className="submit_button mt-4  w-full"><SubmitButton/></div>
      </form>
    </div>
  );
}

export default RequestDemoForm;
