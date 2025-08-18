import styles from "./NewPostWindow.module.css";

import Container from "../../layout/Container";
import ButtonForm from "../../components/ButtonForm";
import { IoClose } from "react-icons/io5";
import UseAuth from "../../hooks/UseAuth";
import { useEffect, useRef, useState } from "react";
import api from "../../api/Api";

const NewPostWindow = ({ setHandleWindowPost }) => {
  const [animatedDiv, setAnimatedDiv] = useState(false);
  const [dataPost, setDataPost] = useState("");
  const textAreaFocus = useRef();

  const {
    dataUser: { name },
  } = UseAuth();

  //Espera para realizar animação
  useEffect(() => {
    textAreaFocus.current?.focus();

    setAnimatedDiv(true);
  }, []);

  const sendPost = async () => {
    console.log("oii");

    try {
      const response = await api.post("/posts/create", { content: dataPost });
      setHandleWindowPost(false);
      console.log(dataPost);
    } catch (error) {
      console.log(error.message);
    }
  };

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
            value={dataPost}
            onChange={(e) => setDataPost(e.target.value)}
          ></textarea>
          <ButtonForm text="Postar" handleClick={() => sendPost()} />
        </div>
      </Container>
    </>
  );
};

export default NewPostWindow;
