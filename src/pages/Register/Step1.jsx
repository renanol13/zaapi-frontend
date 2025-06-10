import Input from "../../components/Input";

const Step1 = ({ handleChange, dataForm }) => {
  return (
    <div>
      <Input
        type="text"
        value={dataForm.email || ''}
        name="email"
        handleChange={handleChange}
        placeholder="Informe seu email..."
      />

      <Input
        type="text"
        value={dataForm.name || ''}
        name="name"
        handleChange={handleChange}
        placeholder="Informe seu nome..."
      />
      
     <Input
        type="text"
        value={dataForm.userName || ''}
        name="userName"
        handleChange={handleChange}
        placeholder="Nome de usuário..."
      />
    </div>
  );
};

export default Step1;
