import styles from "./TextArea.module.css";

const TextArea = ({ value, handleChange, name, placeholder }) => {
  return (
    <div className={styles.boxTextArea}>
      <label htmlFor={name}></label>
      <textarea
        rows="7"
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextArea;
