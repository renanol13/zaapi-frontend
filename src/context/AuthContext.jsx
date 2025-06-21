import { createContext, useState } from "react";
import SplashScreen from "../components/SplashScreen";
import api from "../api/Api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const [dataUser, setDataUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const login = async (data) => {
    try {
      const res = await api.post("/auth/login", data);
      const { token, user } = res;
      if (token && user) {
        setToken(token);
        setDataUser(user);
        // localStorage.setItem("@authDataUser", JSON.stringify(user));
        // localStorage.setItem("@authToken", token);
      }

      return { isLogged: true };
    } catch (error) {
      return { isLogged: false, message: error.message };
    }
  };

  const logout = () => {
    setToken(null);
    setDataUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, dataUser, logout, login }}>
      {isLoading ? children : <SplashScreen />}
    </AuthContext.Provider>
  );
};
