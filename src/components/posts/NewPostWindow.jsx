import styles from "./NewPostWindow.module.css";

import Container from "../../layout/Container";
import ButtonForm from "../../components/ButtonForm";
import { IoClose } from "react-icons/io5";
import UseAuth from "../../hooks/UseAuth";
import { useEffect, useRef, useState } from "react";

const NewPostWindow = ({ setHandleWindowPost }) => {
  const [animatedDiv, setAnimatedDiv] = useState(false);
  const textAreaFocus = useRef();

  const {
    dataUser: { name },
  } = UseAuth();

  useEffect(() => {
    textAreaFocus.current?.focus();

    setTimeout(() => {
      setAnimatedDiv(true);
    }, 10);
  }, []);

  return (
    <>
      <Container customClass={"boxFullHeight"}>
        <div
          className={`${styles.boxNewPost} ${animatedDiv ? styles.show : ""}`}
        >
          <div className={styles.boxHeaderPost}>
            <button onClick={() => setHandleWindowPost(false)}>
              <IoClose />
            </button>
            <h2>Novo Post</h2>
          </div>
          <textarea
            placeholder={`Quais as novidades por aí, ${name} ?`}
            ref={textAreaFocus}
          ></textarea>
          <ButtonForm text="Postar" />
        </div>
      </Container>
    </>
  );
};

export default NewPostWindow;
