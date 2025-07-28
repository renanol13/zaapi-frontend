import styles from "./Step3.module.css";

import { useState } from "react";
import Input from "../../components/Input";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const Step3 = ({ handleChange, stepDataForm, setMessageError }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className={styles.boxInput}>
        <Input
          type={showPassword ? "password" : "text"}
          value={stepDataForm.password || ""}
          name="password"
          handleChange={handleChange}
          placeholder="Crie uma senha..."
          customClass="signin"
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FaEyeSlash /> : <FaRegEye />}
        </button>
      </div>

      <Input
        type={showPassword ? "password" : "text"}
        value={stepDataForm.confirmPassword || ""}
        name="confirmPassword"
        handleChange={handleChange}
        placeholder="Confirme sua senha..."
      />
    </div>
  );
};

export default Step3;
