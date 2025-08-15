import styles from "./Home.module.css";

import UseAuth from "../hooks/UseAuth";
import NewPostWindow from "../components/posts/NewPostWindow";
import ClickWritePost from "../components/posts/ClickWritePost";
import { useState } from "react";

const Home = () => {
  const { logout } = UseAuth();

  const [handleWindowPost, setHandleWindowPost] = useState(false);

  return (
    <div className={styles.boxHome}>
      {handleWindowPost && (
        <NewPostWindow
          setHandleWindowPost={setHandleWindowPost}
          handleWindowPost={handleWindowPost}
        />
      )}
      <ClickWritePost setHandleWindowPost={setHandleWindowPost} />
      <button onClick={() => logout()}>click</button>
      <p>
        lkcejbvjbsdqjhbjbjbvjbvjbjbvjsdbjbvsjbvjsbjvsbvjbvjbdvjbjsbjbjvbjdbjdbvdjbvjvbjbvjvbjvfbjvdbdjbvdjvbdjvdbjdfvbjvfdbdjf
      </p>
    </div>
  );
};

export default Home;
