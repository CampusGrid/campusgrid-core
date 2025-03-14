import React from 'react'

function CustomInput({label, ...props}) {
  return (
    <>
     <label htmlFor="">{label}</label>
     <input {...props} />? 
    </>
  )
}

export default CustomInput
