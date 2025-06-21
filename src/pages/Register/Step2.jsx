import Input from "../../components/Input";
import Select from "../../components/Select";
import TextArea from "../../components/TextArea";

const Step2 = ({ handleChange, dataForm }) => {

  return (
    <div>
      <Input
        type="text"
        value={dataForm.city || ""}
        name="city"
        handleChange={handleChange}
        placeholder="Informe sua cidade..."
      />

      <Input
        type="text"
        value={dataForm.age || ""}
        name="age"
        handleChange={handleChange}
        placeholder="Informe sua idade..."
      />
      <Select
        value={dataForm.sex || ""}
        name="sex"
        handleChange={handleChange}
      />

      <TextArea
        value={dataForm.biography || ""}
        name="biography"
        handleChange={handleChange}
        placeholder="Quer se apresentar? Pode começar por aqui ..."
      />
    </div>
  );
};

export default Step2;
