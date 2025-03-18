"use client";
import {useState, useEffect} from "react"
import { useFormik } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import useApi from "@/hooks/useApi";
import constant from "@/config/constant";
import { useAuth } from "@/context/AuthContext";
import {newAddmissionFormSchema} from "@/schemas/newAddmissionFormSchema"

const AdmissionForm = () => {
  const router = useRouter(); 
  const [classes, setClasses] = useState([]); // Stores class options from API
  const [sections, setSections] = useState([]); // Stores section options
  const [selectedClass, setSelectedClass] = useState(""); // Stores selected class
  const [selectedSection, setSelectedSection] = useState(""); 
  const [isSectionDisabled, setIsSectionDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const {request} = useApi(); 
  const {user} = useAuth(); 


  useEffect(() => {
    request(constant.CLASS_LIST_END_POINT, "GET")
      .then((data) => {
        console.log(data); 
        setClasses(data)
      
      
      })
      .catch((error) => console.error("Error fetching classes:", error));
  }, []);


  // Fetch sections when a class is selected
  // useEffect(() => {
  //   if (selectedClass) {
  //     request(``) 
  //       .then((response) => response.json())
  //       .then((data) => setSections(data))
  //       .catch((error) => console.error("Error fetching sections:", error));
  //   } else {
  //     setSections([]); 
  //   }
  // }, [selectedClass]);




 // Fetch sections when a class is selected
 const fetchSections = (classId) => {
 
 
  if (classId) {
    setIsSectionDisabled(false);
    request(constant.SECTION_LIST_END_POINT, "POST", {classId:parseInt(classId), schoolId:user.userInfo.schoolId})
     .then(data=>{
      console.log(data); 
      setSections(data.result)})
      .catch((error) => console.error("Error fetching sections:", error));
  } else {
    setSections([]);
    setIsSectionDisabled(true);
  }
};

const submitNewStudent =  (values)=>{
  console.log('sarthak'); 
  const newStudentData = values; 
  console.log(newStudentData)
  setLoading(true); 
  newStudentData['sectionId'] = parseInt(newStudentData['sectionId']); 
  newStudentData['classId'] = parseInt(newStudentData['classId']); 
  newStudentData['pinCode'] = parseInt(newStudentData['pinCode']); 
  newStudentData['schoolId'] = user.userInfo.schoolId

  
  request(constant.NEW_STUDENT_ADDMISSTION_END_POINT, "POST", newStudentData)
  .then(data=>{
     console.log(data) ; 
     Swal.fire({
      title: "Success!",
      text: "Your admission form has been submitted.",
      icon: "success",
      confirmButtonText: "OK",
    })
    .then(() => {
      router.push("/school/dashboard/student-management/students");
  })
  }).catch(err=>{
    alert("something went wrong, Please Try again later!!!") ; 
  }).finally(()=>{
    setLoading(false); ;
  })


}




  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      bloodGroup: "",
      studentPhoneNumber: "",
      emailId: "",
      fatherName: "",
      fatherProfession: "",
      fatherPhoneNumber: "",
      motherName: "",
      motherProfession: "",
      motherPhoneNumber: "",
      address: "",
      district: "",
      state: "",
      pinCode: "",
      classId:"", 
      sectionId:""
    },
    validationSchema:newAddmissionFormSchema,
     onSubmit:submitNewStudent
  });

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Admission Form</h2>
      <form onSubmit={formik.handleSubmit} className="space-y-6">
        {/* Responsive Grid: 1 Column (Small), 2 Columns (Medium), 3 Columns (Large) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Standard Inputs */}
          {["firstName", "lastName", "DOB","gender", "bloodGroup", "emailId", "fatherName", "fatherProfession", "motherName", "motherProfession", "address", "district", "state", "pinCode"].map((field, index) => (
            <div key={index}>
              <label className="block text-lg font-medium capitalize mb-1">
                {(field !="DOB" && field.replace(/([A-Z])/g, " $1")) || "DOB"}
              </label>
              <input
                type={field === "DOB" ? "date" : "text"}
                name={field==="DOB" ? "dob":field }
                value={formik.values[field]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full p-2 border rounded text-sm"
              />
              {formik.touched[field=="DOB"?"dob":field] && formik.errors[field=="DOB"?"dob":field] && (
                <p className="text-red-500 text-sm">{formik.errors[field]}</p>
              )}
            </div>
          ))}

      <div>
        <label className="block text-lg font-medium capitalize mb-1">Class</label>
        <select
          name="classId"
          value={ formik.values.classId !=""? parseInt(formik.values.classId) : ""}
          onChange={(e) => {
            formik.handleChange(e);
            fetchSections(e.target.value);
          }}
          onBlur={formik.handleBlur}
          className="w-full p-2 border rounded text-sm"
        >
          <option value="">Select Class</option>
          {classes?.result?.map((cls) => (
            <option key={cls.id} value={parseInt(cls.id)}>
              {cls.roman_name+` (${cls.name})`}
            </option>
          ))}
        </select>
        {formik.touched.class && formik.errors.class && (
          <p className="text-red-500 text-sm">{formik.errors.class}</p>
        )}
      </div>


      <div className="mb-4">
        <label className="block text-lg font-medium capitalize mb-1">Section</label>
        <select
          name="sectionId"
          value= {formik.values.sectionId !=""? parseInt(formik.values.sectionId) : ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={isSectionDisabled}
          className="w-full p-2 border rounded text-sm"
        >
          <option value="">Select Section</option>
          {sections.map((sec) => (
            <option key={sec.id} value={parseInt(sec.id)}>
              {sec.name}
            </option>
          ))}
        </select>
        {formik.touched.section && formik.errors.section && (
          <p className="text-red-500 text-sm">{formik.errors.section}</p>
        )}
      </div>

          {/* Phone Inputs with Flags */}
          {["studentPhoneNumber", "fatherPhoneNumber", "motherPhoneNumber"].map((phoneField, index) => (
            <div key={index}>
              <label className="block text-lg font-medium capitalize mb-1">
                {phoneField.replace(/([A-Z])/g, " $1")}
              </label>
              <PhoneInput
                country={"in"} // Default country is India
                value={formik.values[phoneField]}
                onChange={(value, country) => {
                  const phoneWithoutCountryCode = value.replace(`+${country.dialCode}`, "");
                  formik.setFieldValue(phoneField, phoneWithoutCountryCode);
                }}
                inputClass="w-full p-2 border rounded text-sm"
                containerClass="w-full"
              />
              {formik.touched[phoneField] && formik.errors[phoneField] && (
                <p className="text-red-500 text-sm">{formik.errors[phoneField]}</p>
              )}
            </div>
          ))}
        </div>

        {/* Submit Button Centered */}
        <div>
      <button
        type="submit"
        disabled={loading}
        className={`w-full md:w-1/2 lg:w-1/3 p-3 rounded-lg  bg-hoverlink text-white flex items-center justify-center ${
          loading ? " cursor-not-allowed" : " hover:bg-blue-600"
        }`}
      >
        <span className="mr-2 text-white">Submit</span>
        {loading && (
          <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0h-4l4 4 4-4h-4a8 8 0 00-16 0z"></path>
          </svg>
        )}
      </button> 
    </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
