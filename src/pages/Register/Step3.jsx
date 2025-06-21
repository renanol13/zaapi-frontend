import styles from "./Step3.module.css";

import { useState } from "react";
import Input from "../../components/Input";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const Step3 = ({ handleChange, dataForm }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className={styles.boxInput}>
        <Input
          type={showPassword ? "password" : "text"}
          value={dataForm.city || ""}
          name="city"
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
        value={dataForm.age || ""}
        name="age"
        handleChange={handleChange}
        placeholder="Confirme sua senha..."
      />
    </div>
  );
};

export default Step3;
