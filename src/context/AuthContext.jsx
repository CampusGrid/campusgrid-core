"use client";

import { createContext, useState, useEffect, useContext, useRef } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import callApi from "../utils/axiosInstance";
import * as CONSTANT from "@/config/constant.js";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const isInitialized = useRef(false);  

  useEffect(() => {
    if (isInitialized.current) return; 

    const token = Cookies.get("authToken");

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000);

        if (decodedToken.exp > currentTime) {
          setUser({
            userId: decodedToken.sub,
            userInfo: decodedToken.claims,
          });
        } else {
          Cookies.remove("authToken");
          setUser(null);
        }
      } catch (error) {
        console.error("Invalid token:", error);
        Cookies.remove("authToken");
        setUser(null);
      }
    } else {
      setUser(null);
    }

    setLoading(false);
    isInitialized.current = true;  
  }, []); 

  const login = async (userId, password) => {
    try {
      setLoading(true);
      const response = await callApi.post(CONSTANT.LOGIN_END_POINT, {
        userId,
        password,
      });

      Cookies.set("authToken", response.data.data.tokens.accessToken, {
        expires: 7,
      });
      setUser({
        userId: response.data.data.userId,
        userInfo: {
          emailId: response.data.data.emailId,
          schoolName: response.data.data.schoolName,
          schoolId: response.data.data.schoolId,
        },
      });
      router.push(`/school/dashboard`);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const logout = () => {
    Cookies.remove("authToken");
    setUser(null);
    router.replace("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
