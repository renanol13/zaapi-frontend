import styles from "./FetchLoading.module.css";

import svgFetchLoading from "../img/fetchLoading.svg";

const FetchLoading = () => {
  return (
    <img src={svgFetchLoading} alt="loading" className={styles.fetchLoading} />
  );
};

export default FetchLoading;
