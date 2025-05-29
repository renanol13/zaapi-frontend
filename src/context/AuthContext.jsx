import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(false);
    
  return (
    <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
  );
};
