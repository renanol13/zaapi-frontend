import styles from "./Container.module.css";

const Container = ({ children }) => {
  return (
    <div className={styles.boxConteiner}>
     {children}
    </div>
  );
};

export default Container;
