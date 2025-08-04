import styles from "./Header.module.css";

import NavBar from "./NavBar";
import logotipo from "../icons/logotipo.png";
import { useState } from "react";

const Header = () => {
  const [nameAddress, setNameAddress] = useState("Página inicial");
  return (
    <div className={styles.boxHeader}>
      <header>
        <div className={styles.boxLogo}>
          <img src={logotipo} alt="Logotipo" />
          <h2>Zaap</h2>
        </div>
        <h2>{nameAddress}</h2>
      </header>
      <NavBar setNameAddress={setNameAddress} />
    </div>
  );
};

export default Header;
