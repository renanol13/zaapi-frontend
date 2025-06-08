import ButtonForm from "../components/ButtonForm";
import Input from "../components/Input";
import styles from "./Signin.module.css";

import { MdOutlineMail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import icon2 from "../icons/logotipo2.png";
import { useState } from "react";

const Signin = () => {
  const handleChange = () => {};
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={styles.boxSignin}>
      <div className={styles.boxStyles}>
        <img src={icon2} alt="logotipo" />
        <form>
          <div className={styles.boxInput}>
            <MdOutlineMail />
            <Input
              type="text"
              name="email"
              value=""
              handleChange={handleChange}
              placeholder="Digite seu email..."
              customClass="signin"
            />
          </div>
          <div className={styles.boxInput}>
            <TbLockPassword />
            <Input
              type={showPassword ? 'password' : 'text'}
              name="password"
              value=""
              handleChange={handleChange}
              placeholder="Digite sua senha..."
              customClass="signin"
            />
            <button type="button" onClick={()=> setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaRegEye />}
            </button>
          </div>
          <ButtonForm text="Entrar" />
        </form>
        <p>
          Ainda não tem conta? <a href="">Registre-se</a>
        </p>
      </div>
    </div>
  );
};

export default Signin;
