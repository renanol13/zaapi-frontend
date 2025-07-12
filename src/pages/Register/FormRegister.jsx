import styles from "./FormRegister.module.css";
import ButtonForm from "../../components/ButtonForm.jsx";
import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3.jsx";
import MessageError from "../../components/MessageError.jsx";
import UseStepForm from "../../hooks/UseStepForm.jsx";
import api from '../../api/Api.jsx'

const FormRegister = () => {
  const [dataForm, setDataForm] = useState({});
  const [messageError, setMessageError] = useState("");

  const handleChange = (e) => {
    if (messageError) setMessageError("");
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };
  const stepsItems = [
    <Step1 handleChange={handleChange} dataForm={dataForm} />,
    <Step2 handleChange={handleChange} dataForm={dataForm} />,
    <Step3
      handleChange={handleChange}
      dataForm={dataForm}
      setMessageError={setMessageError}
    />,
  ];

  const { currentStep, currentComponent, changeStep, isFirstStep, isLastStep } =
    UseStepForm(stepsItems);

  const handleSubmit = async () => {
    try {
      const response = await api.post('/auth/register',  dataForm )
      console.log(response);
    } catch (err) {
      setMessageError(err.message)
    }
  };

  const verifyFormStep = () => {
    //Verifica se os campos de cada step estao preenchidos
    // const fildesForm = {
    //   0: ["email", "name", "userName"],
    //   1: ["city", "age", "sex", "biography"],
    //   2: ["password"],
    // };

    // const isNullField = fildesForm[currentStep].some(
    //   (field) => !dataForm[field]
    // );

    // if (isNullField) return setMessageError("Preencha os campos!");
    changeStep(currentStep + 1);
  };

  return (
    <div className={styles.boxFormRegister}>
      <div className={styles.boxMain}>
        <h3>
          <strong>Zaap</strong> é onde o social encontra o simples. Crie seu
          perfil e sinta-se à vontade.
        </h3>
        <form className={styles.boxForm}>{currentComponent}</form>
        <MessageError message={messageError} />
        <div className={styles.boxActions}>
          {!isFirstStep && (
            <ButtonForm
              text="Voltar"
              handleClick={() => changeStep(currentStep - 1)}
            />
          )}

          {!isLastStep ? (
            <ButtonForm text="Avançar" handleClick={() => verifyFormStep()} />
          ) : (
            <ButtonForm text="Enviar" handleClick={(e) => handleSubmit(e)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default FormRegister;
