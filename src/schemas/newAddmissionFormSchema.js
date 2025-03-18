import React from "react";
import * as Yup from "yup";

export const newAddmissionFormSchema =  Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    dob: Yup.date().required("Date of birth is required"),
    gender: Yup.string().required("Gender is required"),
    bloodGroup: Yup.string().required("Blood group is required"),
    studentPhoneNumber: Yup.string().required("Phone number is required"),
    emailId: Yup.string().email("Invalid email").required("Email is required"),
    fatherName: Yup.string().required("Father's name is required"),
    fatherProfession: Yup.string().required("Father's profession is required"),
    fatherPhoneNumber: Yup.string().required("Phone number is required"),
    motherName: Yup.string().required("Mother's name is required"),
    motherProfession: Yup.string().required("Mother's profession is required"),
    motherPhoneNumber: Yup.string().required("Phone number is required"),
    address: Yup.string().required("Address is required"),
    district: Yup.string().required("District is required"),
    state: Yup.string().required("State is required"),
    pinCode: Yup.string()
      .matches(/^[0-9]{6}$/, "Invalid pin code")
      .required("Pin code is required"),
    classId: Yup.string().required("Class is required"), 
    sectionId: Yup.string().required("Section is required")
    
  })

