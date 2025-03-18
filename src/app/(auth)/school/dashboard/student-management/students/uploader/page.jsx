"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import useApi from "@/hooks/useApi";
import constant from "@/config/constant";
import { useAuth } from "@/context/AuthContext";

const StudentUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [classess, setClasses] = useState([]);
  const { request } = useApi();
 const {user} = useAuth(); 
  useEffect(() => {
    request(constant.CLASS_LIST_END_POINT, "GET")
      .then((data) => {
        console.log(data);
        setClasses(data.result);
      })
      .catch((error) => console.error("Error fetching classes:", error));
  }, []);

  const formik = useFormik({
    initialValues: {
      classId: "",
      file: null,
    },
    validationSchema: Yup.object({
      classId: Yup.string().required("Class is required"),
      file: Yup.mixed()
        .required("File is required")
        .test("fileFormat", "Only Excel files are allowed", (value) => {
          return (
            value &&
            [
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
              "application/vnd.ms-excel",
            ].includes(value.type)
          );
        }),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const formData = new FormData();
      formData.append("classId", parseInt(values.classId));
      formData.append("studentFile", values.file);
      formData.append("schoolId", user.userInfo.schoolId)

      try { 
        const response = await request(constant.STUDENT_UPLOADER, "POST", formData);

        if (response.success) {
          alert("File uploaded successfully!");
          resetForm();
          setSelectedFile(null);
        } else {
          alert("Upload failed: " + response.message);
        }
      } catch (error) {
        console.error("Error uploading file:", error);
        alert("An error occurred while uploading.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  // Handle file change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    formik.setFieldValue("file", file);
  };

  return (
    <div className="my-4 h-screen">
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Student Uploader</h2>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Class Selection */}
          <div>
            <label className="block text-lg font-medium mb-2">Select Class</label>
            <select
              name="classId"
              value={formik.values.classId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 border rounded text-sm"
            >
              <option value="" disabled>
                Select a class
              </option>
              {classess.map((data, index) => (
                <option key={index} value={data.id}>
                  {data.name}
                </option>
              ))}
            </select>
            {formik.touched.classId && formik.errors.classId && (
              <p className="text-red-500 text-sm">{formik.errors.classId}</p>
            )}
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-lg font-medium mb-2">Upload Excel File</label>
            <input
              type="file"
              accept=".xls, .xlsx"
              onChange={handleFileChange}
              className="w-full p-2 border rounded text-sm"
            />
            {formik.touched.file && formik.errors.file && (
              <p className="text-red-500 text-sm">{formik.errors.file}</p>
            )}
            {selectedFile && (
              <p className="text-green-600 text-sm mt-1">Selected File: {selectedFile.name}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full md:w-1/2 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? "Uploading..." : "Upload"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentUploader;
