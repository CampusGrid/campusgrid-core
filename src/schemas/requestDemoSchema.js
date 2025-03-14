import React from "react";
import * as Yup from "yup";

export const RequestDemoSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required"),
  phoneNumber:Yup.number().required("phone number is required"), 
  organizationName : Yup.number().required(),
  additionalInfo:Yup.string().required("sarthak")
});
