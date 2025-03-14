"use client";
import { useState } from "react";
import Form from "next/form";
import * as Yup from "yup";
import { useFormik } from "formik";
import { LoginSchema } from "@/schemas/loginSchema";
import { useAuth } from "@/context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    console.log(values);   
    try {
      await login(values.userId, values.password);
    } catch (error) {
      setErrors({ general: "Invalid userId or password" });
    }
    setSubmitting(false);
  };
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        userId: "",
        password: "",
      },
      validationSchema: LoginSchema,
      onSubmit,
    });

  return (
    <div className="bg-gray-100 w-[60%]">
      <Form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded lg shadow-md"
      >
        <div className="row">
          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-[18px]"
              htmlFor="userId"
            >
              Enter UserId or Email <span className="text-red-500">*</span>
            </label>
            <input
              name="userId"
              className={`${
                errors.userId && touched.userId ? "border border-red-700" : ""
              } w-full p-2  border  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 `}
              placeholder="Enter User Id or Email"
              value={values.userId}
              onChange={(e) => {
                e.target.value = e.target.value.includes("@")
                  ? e.target.value.toLowerCase()
                  : e.target.value.toUpperCase();
                handleChange(e);
              }}
            />
            {errors.userId && touched.userId && (
              <p className="text-red-500 block mt-1">{errors.userId}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-[18px]"
              htmlFor="userId"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input
              name="password"
              type="password"
              className={`${
                errors.password && touched.userId ? "border border-red-700" : ""
              } w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="password"
              onChange={handleChange}
              value={values.password}
            />
            {errors.userId && touched.userId && (
              <p className="text-red-500 block mt-1">{errors.password}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-hoverlink text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </Form>
    </div>
  );
};

export default Login;
