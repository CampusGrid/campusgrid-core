"use client";

import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL_CORE_SERVER   

const useApi =  () => {
  const router = useRouter();

  const request = async (endpoint, method = "GET", body = null, headers = {}) => {
    try {
      const token = Cookies.get("authToken");
      if (!token) {
        router.push("/login");
        return;
      }

      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          ...headers, 
        },
        body: body ? JSON.stringify(body) : null, 
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error("API request failed:", error);
      throw error;
    }
  };

  return { request };
};

export default useApi;
