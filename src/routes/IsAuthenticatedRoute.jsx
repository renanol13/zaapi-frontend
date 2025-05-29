//import styles from './IsAuthenticatedRoute.module.css'

import { Navigate } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";

//Evita que usuarios acessem rotas depois de logado(ex:signin)

const IsAuthenticatedRoute = ({ children }) => {
  const {token} = UseAuth()
  return token ? <Navigate to="/" /> : children;
};

export default IsAuthenticatedRoute;
