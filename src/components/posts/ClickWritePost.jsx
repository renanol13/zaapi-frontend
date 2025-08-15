import { useEffect, useState } from "react";
import styles from "./ClickWritePost.module.css";

import { IoAdd } from "react-icons/io5";
import { GoPersonFill } from "react-icons/go";

const ClickWritePost = ({ setHandleWindowPost }) => {
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
        <div
          className={styles.boxText}
          onClick={() => setHandleWindowPost(true)}
        >
          <GoPersonFill />
          <div className={styles.divTexArea}>Quais as novidade por aí?</div>
        </div>
      ) : (
        <button
          className={styles.boxButtonNewPost}
          onClick={() => setHandleWindowPost(true)}
        >
          <IoAdd />
        </button>
      )}
    </>
  );
};

export default ClickWritePost;
