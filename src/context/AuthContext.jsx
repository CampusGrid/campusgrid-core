"use client";

import { createContext, useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import callApi from "../utils/axiosInstance";
import * as CONSTANT from "@/config/constant.js";
import {jwtDecode} from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("authToken");
    if (token) {
      try {
          const decodedToken = jwtDecode(token); 
          console.log(decodedToken)
          const currentTime = Math.floor(Date.now() / 1000); 
          if (decodedToken.exp > currentTime) {
              setUser({
                userId : decodedToken.sub, 
                userInfo : decodedToken.claims
              }); 
          } else {
              localStorage.removeItem('token'); // Remove expired token
              setUser(null);
          }
      } catch (error) {
          console.error("Invalid token:", error);
          localStorage.removeItem('token');
          setUser(null);
          router.push('/login'); // Redirect to login
      }
  } else {
      setUser(null)
      router.push("/login")
  }
}, [router]); 

  const login = async (userId, password) => {
    try {
      const response = await callApi.post(CONSTANT.LOGIN_END_POINT, {
        userId,
        password,
      });

      Cookies.set("authToken", response.data.data.tokens.accessToken, {
        expires: 7,
      });
      setUser({
        userId:response.data.data.userId, 
        userInfo: {
          emailId: response.data.data.emailId, 
          schoolName : response.data.data.schoolName,
        }
      });
      router.push(`/school/dashboard`);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const logout = () => {
    Cookies.remove("authToken");
    setUser(null);
    console.log(user)
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
