import styles from "./SplashScreen.module.css";
import iconSplashScreen from "../icons/logotipo.png";

const SplashScreen = () => {
  return (
    <div className={styles.boxSplashScreen}>
      <img src={iconSplashScreen} alt="Splash Screen" />
    </div>
  );
};

export default SplashScreen;
