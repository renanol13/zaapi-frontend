import Input from "../../components/Input";

const Step1 = ({ handleChange, stepDataForm, currentStep }) => {
  

  return (
    <div>
      <Input
        type="text"
        value={stepDataForm.email || ''}
        name="email"
        handleChange={handleChange}
        placeholder="Informe seu email..."
      />

      <Input
        type="text"
        value={stepDataForm.name || ''}
        name="name"
        handleChange={handleChange}
        placeholder="Informe seu nome..."
      />
      
     <Input
        type="text"
        value={stepDataForm.userName || ''}
        name="userName"
        handleChange={handleChange}
        placeholder="Nome de usuário..."
      />
    </div>
  );
};

export default Step1;
