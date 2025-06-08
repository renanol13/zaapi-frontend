import styles from "./Input.module.css";

const Input = ({
  type,
  name,
  value,
  handleChange,
  placeholder,
  customClass,
}) => {
  return (
    <div className={styles.boxInput}>
      <label>{name}</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className={styles[customClass]}
      />
    </div>
  );
};

export default Input;
