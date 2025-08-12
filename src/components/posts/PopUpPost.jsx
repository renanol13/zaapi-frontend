import { useEffect, useState } from "react";
import styles from "./PopUpPost.module.css";

import { IoAdd } from "react-icons/io5";
import { GoPersonFill } from "react-icons/go";

const PopUpPost = () => {
  const [resizeWidth, setRisizeWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWidth = () => {
      setRisizeWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <>
      {resizeWidth >= 550 ? (
        <div className={styles.boxText}>
          <GoPersonFill />
          <div className={styles.divTexArea}>
            Quais as novidade por aí?
          </div>
        </div>
      ) : (
        <button className={styles.boxButtonNewPost}>
          <IoAdd />
        </button>
      )}
    </>
  );
};

export default PopUpPost;
