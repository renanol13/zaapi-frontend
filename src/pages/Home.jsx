import styles from "./Home.module.css";

import UseAuth from "../hooks/UseAuth";
import NewPostWindow from "../projects/posts/NewPostWindow";
import ClickWritePost from "../projects/posts/ClickWritePost";
import { useState } from "react";
import ContentCard from "../projects/ContentCard";

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
      {/* <button onClick={() => logout()}>click</button> */}
     <ContentCard/>
    </div>
  );
};

export default Home;
