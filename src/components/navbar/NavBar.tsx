import { useState } from "react";
import { NavLink } from "react-router-dom";
import { PlayIcon } from "../../assets/icons/Icons.tsx";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleSubMenu = () => setSubMenuOpen((prev) => !prev);
  const toggleMenu = () => {
   
    setMenuOpen((prev) => !prev);
  };

  return (
    <header>
      {isMenuOpen && <div className={styles.menuOverlay} onClick={toggleMenu}></div>}
      <nav>
        <div className={styles.navlogo}>
          <NavLink to="/">
            <span>RealGame</span>
          </NavLink>
        </div>
        <ul className={`${styles.navlinks} ${isMenuOpen ? styles.active : ""}`}>
          <li>
            <NavLink to="/" style={({isActive})=>({color:isActive?'red':'black'})}>Home</NavLink>
          </li>
          <li className={styles.haschild}>
            <div onClick={toggleSubMenu} className={styles.subMenuToggle}>
              <span>Play</span>
              <span className={styles.dropIcon}>
                <PlayIcon />
              </span>
            </div>
            {isSubMenuOpen && (
              <ul className={styles.subMenu}>
                <li>
                  <NavLink to="/tictictoe" style={({isActive})=>({color:isActive?'red':'black'})}>Tic Tac Toe</NavLink>
                </li>
                <li>
                  <NavLink to="/connectfour" style={({isActive})=>({color:isActive?'red':'black'})}>Connect Four</NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink to="/about" style={({isActive})=>({color:isActive?'red':'black'})}>About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={({isActive})=>({color:isActive?'red':'black'})}>Contact</NavLink>
          </li>
        </ul>
        <div
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
        >
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;