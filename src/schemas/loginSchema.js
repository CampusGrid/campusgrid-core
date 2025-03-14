import React from "react";
import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  userId: Yup.string().min(5, "User Id must be at leat 5 characters").required("User Id or Email is required"),
  password: Yup.string().min(4, "Password must be at least 4 characters").required("Password is required"),
});
