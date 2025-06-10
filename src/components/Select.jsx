import styles from "./Select.module.css";

const Select = ({ handleChange, value, name }) => {
  return (
    <div className={styles.boxSelect}>
      <label htmlFor={name}></label>
      <select name={name} value={value} onChange={handleChange} id={name} required>
        <option value=""  disabled hidden>
          Informe seu gênero
        </option>
        <option value="Masculino">Masculino</option>
        <option value="Feminino">Feminino</option>
      </select>
    </div>
  );
};

export default Select;
