import styles from "./Step3.module.css";

import { useState } from "react";
import Input from "../../components/Input";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const Step3 = ({ handleChange, dataForm, setMessageError }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div>
      <div className={styles.boxInput}>
        <Input
          type={showPassword ? "password" : "text"}
          value={dataForm.password || ""}
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
        value={confirmPassword || ""}
        name="confirmPassword"
        handleChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirme sua senha..."
      />
    </div>
  );
};

export default Step3;
