import styles from "./Container.module.css";

const Container = ({ children, customClass }) => {
  return (
    <div     className={`${
        customClass ? styles[customClass] : styles["boxConteiner"]
      }`}>
     {children}
    </div>
  );
};

export default Container;
