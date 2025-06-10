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
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className={styles[customClass]}
        required
      />
    </div>
  );
};

export default Input;
