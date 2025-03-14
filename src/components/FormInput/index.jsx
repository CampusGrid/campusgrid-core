import React from "react";

function FormInput({
  label,
  name,
  type,
  errors,
  placeholder,
  values,
  handleChange,
  touched,
  ...props
}) {
  return (
    <div className="mb-4">
      {label ? (
        <label className="mb-2 block text-white text-[18px]" htmlFor={name}>
          {label}
          <span className="text-red-500 px-2">*</span>
        </label>
      ) : (
        ""
      )}
      <input
        type=""
        name={name}
        className={`${
          errors.name && touched.name ? "border border-red-700" : ""
        } w-full p-2  border  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 `}
        placeholder={placeholder}
        value={values.name}
        onChange={handleChange}
      />
      {errors.userId && touched.userId && (
        <p className="text-red-500 block mt-1">{errors.name}</p>
      )}
    </div>
  );
}

export default FormInput;
