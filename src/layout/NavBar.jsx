import styles from "./NavBar.module.css";

import { Link, useLocation } from "react-router-dom";

import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { FaUserFriends } from "react-icons/fa";

import { IoPerson } from "react-icons/io5";

const NavBar = ({ setNameAddress }) => {

  const { pathname } = useLocation();



  const elementsNav = [
    {
      link: "/",
      label: "Página inicial",
      icon: <GoHomeFill />,
    },

    {
      link: "/search",
      label: "Pesquisar",
      icon: <FiSearch />,
    },
    {
      link: "/friends",
      label: "Amigos",
      icon: <FaUserFriends />,
    },
    {
      link: "/profile",
      label: "Perfil",
      icon: <IoPerson />,
    },
  ];

  return (
    <nav className={styles.boxNavBar}>
    
      <ul>
        {elementsNav.map(({ link, label, icon }, i) => (
          <li key={i}>
            
            <Link
              onClick={()=>setNameAddress(label)}
              to={link}
              className={`${link === pathname ? styles.activeIcon : ''}`}
            >
              {icon}
            </Link>
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
