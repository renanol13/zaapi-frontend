import Input from "../../components/Input";
import Select from "../../components/Select";
import TextArea from "../../components/TextArea";

const Step2 = ({ handleChange, stepDataForm }) => {

  return (
    <div>
      <Input
        type="text"
        value={stepDataForm.city || ""}
        name="city"
        handleChange={handleChange}
        placeholder="Informe sua cidade..."
      />

      <Input
        type="number"
        value={stepDataForm.age || ""}
        name="age"
        handleChange={handleChange}
        placeholder="Informe sua idade..."
      />
      <Select
        value={stepDataForm.sex || ""}
        name="sex"
        handleChange={handleChange}
      />

      <TextArea
        value={stepDataForm.biography || ""}
        name="biography"
        handleChange={handleChange}
        rows={7}
        placeholder="Quer se apresentar? Pode começar por aqui ..."
      />
    </div>
  );
};

export default Step2;
