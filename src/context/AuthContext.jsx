import { createContext, useEffect, useState } from "react";
import SplashScreen from "../components/SplashScreen";
import api from "../api/Api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const [dataUser, setDataUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storageUser = localStorage.getItem("@authDataUser");
    const storageToken = localStorage.getItem("@authToken");

    if (storageToken && storageUser) {
      setDataUser(JSON.parse(storageUser));
      setToken(storageUser);
    }

    setIsLoading(false);
  }, []);

  const login = async (data) => {
    try {
      const res = await api.post("/auth/login", data);
      const { token, userData } = res.data;
      console.log(token);
      
      if (token && userData ) {
        setToken(token);
        setDataUser(userData);
        localStorage.setItem("@authDataUser", JSON.stringify(userData));
        localStorage.setItem("@authToken", token);
      }

      return { isLogged: true };
    } catch (error) {
      return { isLogged: false, message: error.message };
    }
  };

  const logout = () => {
    setToken(null);
    setDataUser(null);
    localStorage.removeItem("@authDataUser");
    localStorage.removeItem("@authToken");
  };

  return (
    <AuthContext.Provider value={{ token, dataUser, logout, login }}>
      {!isLoading ? children : <SplashScreen />}
    </AuthContext.Provider>
  );
};
