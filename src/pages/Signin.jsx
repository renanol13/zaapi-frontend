import ButtonForm from "../components/ButtonForm";
import Input from "../components/Input";
import styles from "./Signin.module.css";
import MessageError from "../components/MessageError";

import { MdOutlineMail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import icon2 from "../icons/logotipo2.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";

const Signin = () => {
  const [data, setData] = useState({});
  const [messageError, setMessageError] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const navigate = useNavigate();
  const { login } = UseAuth();

  const handleChange = (e) => {
    if(messageError) setMessageError('')
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    const { isLogged, message } = await login(data);
    isLogged ? navigate("/") : setMessageError(message);
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.email || !data.password) {
      return setMessageError("Preencha todos os campos!");
    }
    handleLogin();
  };
  return (
    <div className={styles.boxSignin}>
      <div className={styles.boxStyles}>
        <img src={icon2} alt="logotipo" />
        <form onSubmit={handleSubmit}>
          <div className={styles.boxInput}>
            <MdOutlineMail />
            <Input
              type="text"
              name="email"
              value={data.email || ""}
              handleChange={handleChange}
              placeholder="Digite seu email..."
              customClass="signin"
            />
          </div>
          <div className={styles.boxInput}>
            <TbLockPassword />
            <Input
              type={showPassword ? "password" : "text"}
              name="password"
              value={data.password || ""}
              handleChange={handleChange}
              placeholder="Digite sua senha..."
              customClass="signin"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaRegEye />}
            </button>
          </div>
          <ButtonForm text="Entrar" />
          <MessageError message={messageError} />
        </form>
        <p>
          Ainda não tem conta? <Link to="/register">Registre-se</Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
