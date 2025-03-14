'use client'

import React from 'react'
import LoginForm from "./LoginForm"
import LoginContent  from './LoginContent'


function Login() {
  return (
    <>
     <div className="w-screen h-screen grid md:grid-cols-1 lg:grid-cols-2 ">
      <div className="login-form  p-2">
           <LoginForm/>
      </div>
      <div className="login-content hidden lg:block p-2 bg-gradientmain">
        <LoginContent/>
      </div>
     </div>
    </>
  )
}

export default Login
