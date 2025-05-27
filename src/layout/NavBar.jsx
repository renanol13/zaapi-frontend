import styles from "./NavBar.module.css";

import { Link } from "react-router-dom";

import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { FaUserFriends } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
  const elementsNav = [
    {
      link: "/",
      label: "Home",
      icon: <GoHomeFill />,
    },

    {
      link: "/search",
      label: "Pesquisar",
      icon: <FiSearch />,
    },
    {
      link: "/friends",
      label: "amigos",
      icon: <FaUserFriends />,
    },
    {
      link: "/profile",
      label: "Perfil",
      icon: <CgProfile />,
    },
  ];

  return (
    <nav className={styles.boxNavBar}>
      <ul>
        {elementsNav.map(({ link, label, icon }, i) => (
          <li key={i}>
                <a>{icon}</a>
                <span>{label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
