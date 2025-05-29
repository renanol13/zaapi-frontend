import { Outlet } from "react-router-dom";
import Signin from "../pages/Signin";
import UseAuth from "../hooks/UseAuth";

const AuthRoute = () => {
    const { token }  = UseAuth()
    
  return token ? <Outlet /> : <Signin />;
};

export default AuthRoute;
