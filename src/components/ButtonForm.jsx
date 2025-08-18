import styles from "./ButtonForm.module.css";
import FetchLoading from "./FetchLoading";

const ButtonForm = ({ handleClick = null, text, loading = null }) => {
  console.log(loading);
  
  return (
    <button onClick={() => handleClick?.()} className={styles.button}>
      {
        loading ? <FetchLoading/> : text
      }
    </button>
  );
};

export default ButtonForm;

