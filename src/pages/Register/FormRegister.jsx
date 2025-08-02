import styles from "./FormRegister.module.css";
import ButtonForm from "../../components/ButtonForm.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3.jsx";
import MessageError from "../../components/MessageError.jsx";
import UseStepForm from "../../hooks/UseStepForm.jsx";
import api from "../../api/Api.jsx";
import UseAuth from "../../hooks/UseAuth.jsx";

const FormRegister = () => {
  const [dataForm, setDataForm] = useState({});
  const [stepDataForm, setStepDataForm] = useState({});
  const [messageError, setMessageError] = useState("");
  const {setDataStorage} = UseAuth()
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (messageError) setMessageError("");
    setStepDataForm({ ...stepDataForm, [e.target.name]: e.target.value });
  };

  const stepsItems = [<Step1 />, <Step2 />, <Step3 />];

  const { currentStep, currentComponent, changeStep, isFirstStep, isLastStep } =
    UseStepForm(stepsItems, { handleChange, stepDataForm, setMessageError });

  const handleSubmit = async (newDataForm) => {
    const { isLogged, message } = setDataStorage('auth/register', newDataForm)
    setMessageError(message)
    isLogged ? navigate("/") : setMessageError(message);
  };

  const fetchValidateStep = async (stepData) => {
    //Verifica no servidor se todos os campos estão corretos

    try {
      await api.post(`/auth/validate-step/${currentStep}`, stepData);
      const newDataForm = { ...dataForm, ...stepData };
      setDataForm(newDataForm);
      setStepDataForm({});
      changeStep(currentStep + 1);

      if (currentStep === 2) handleSubmit(newDataForm);
    } catch (error) {
      setMessageError(error.message);
    }
  };

  const verifyFormStep = () => {
    // Verifica se os campos de cada step estao preenchidos
    const fildesForm = {
      0: ["email", "name", "userName"],
      1: ["city", "age", "sex", "biography"],
      2: ["password", "confirmPassword"],
    };

    const isNullField = fildesForm[currentStep].some(
      (field) => !stepDataForm[field]
    );
    if (isNullField) return setMessageError("Preencha os campos!");

    if (currentStep === 2) {
      if (stepDataForm.password !== stepDataForm.confirmPassword) {
        return setMessageError("As senhas não coincidem!");
      }

      const { confirmPassword, ...password } = stepDataForm;
      return fetchValidateStep(password);
    }
    fetchValidateStep(stepDataForm);
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
        <div className={styles.boxInfoCurrentStep}>
          {stepsItems.map((step, index) => (
            <div
              key={index}
              className={`${index === currentStep && styles.activeCurrentStep}`}
            ></div>
          ))}
        </div>
        <div className={styles.boxActions}>
          {!isFirstStep && (
            <ButtonForm
              text="Voltar"
              handleClick={() => changeStep(currentStep - 1)}
            />
          )}

          <ButtonForm
            text={!isLastStep ? "Avançar" : "Enviar"}
            handleClick={() => verifyFormStep()}
          />
        </div>
      </div>
    </div>
  );
};

export default FormRegister;
