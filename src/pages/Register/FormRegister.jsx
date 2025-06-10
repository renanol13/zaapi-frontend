import styles from "./FormRegister.module.css";
import logo from "../../icons/logotipo2.png";
import Step1 from "./Step1";
import ButtonForm from "../../components/ButtonForm.jsx";
import { useState } from "react";
import Step2 from "./Step2";
import Step3 from "./Step3.jsx";
import UseStepForm from "../../hooks/UseStepForm.jsx";

const FormRegister = () => {
  const [dataForm, setDataForm] = useState({});

  const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const stepsItems = [
    <Step1 handleChange={handleChange} dataForm={dataForm} />,
    <Step2 handleChange={handleChange} dataForm={dataForm} />,
    <Step3 handleChange={handleChange} dataForm={dataForm} />,
  ];
  const { currentStep, currentComponent, changeStep, isFirstStep, isLastStep } =
    UseStepForm(stepsItems);

  const handleSubmit = () => {};

  return (
    <div className={styles.boxFormRegister}>
      <div className={styles.boxMain}>
        <h3>
          <strong>Zaap</strong> é onde o social encontra o simples. Crie seu
          perfil e sinta-se à vontade.
        </h3>
        <form className={styles.boxForm}>{currentComponent}</form>
        <div className={styles.boxActions}>
          {!isFirstStep && (
            <ButtonForm
              text="Voltar"
              handleClick={() => changeStep(currentStep - 1)}
            />
          )}

          {!isLastStep ? (
            <ButtonForm
              text="Avançar"
              handleClick={() => changeStep(currentStep + 1)}
            />
          ) : (
            <ButtonForm text="Enviar" handleClick={(e) => handleSubmit(e)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default FormRegister;
