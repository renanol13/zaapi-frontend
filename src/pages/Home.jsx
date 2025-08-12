import styles from "./Home.module.css";

import UseAuth from "../hooks/UseAuth";
import NewPostWindow from "../components/posts/NewPostWindow";
import PopUpPost from "../components/posts/PopUpPost";

const Home = () => {
  const { logout } = UseAuth();
  return (
    <div className={styles.boxHome}>
      {/* <NewPostWindow/> */}
      <PopUpPost/>
      <button onClick={() => logout()}>click</button>
      <p>
        lkcejbvjbsdqjhbjbjbvjbvjbjbvjsdbjbvsjbvjsbjvsbvjbvjbdvjbjsbjbjvbjdbjdbvdjbvjvbjbvjvbjvfbjvdbdjbvdjvbdjvdbjdfvbjvfdbdjf
      </p>
    </div>
  );
};

export default Home;
