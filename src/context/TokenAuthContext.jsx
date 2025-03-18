"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const TokenAuthContext = createContext();

export function TokenAuthProvider({ children }) {
  const [token, setToken] = useState(null);

  const getTokenFromCookies = () => {
    return Cookies.get("authToken"); 
  };

  const setTokenInCookies = (newToken) => {
    Cookies.set("token", newToken, { expires: 7 }); 
    setToken(newToken);
  };

  const removeToken = () => {
    localStorage.removeItem('token'); 
    setToken(null); 
  };

  useEffect(() => {
    const storedToken = getTokenFromCookies();
    setToken(storedToken);
  }, []);

  return (
    <TokenAuthContext.Provider value={{ token, setTokenInCookies, removeToken }}>
      {children}
    </TokenAuthContext.Provider>
  );
}



export function useTokenAuth() {
  return useContext(TokenAuthContext);
}
