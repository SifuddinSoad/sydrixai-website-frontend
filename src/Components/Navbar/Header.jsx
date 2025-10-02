import React, { useState } from "react";
import styles from "./Header.module.css";
import { FaRobot, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Home", link: "/" },
  { name: "Features", link: "/features" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logoSection}>
        <img src="/logo.png" alt="SydrixAI Logo" className={styles.logoIcon} />
        <span className={styles.logoText}>Sydrix AI</span>
      </NavLink>

      {/* Desktop Menu */}
      <nav className={styles.menuSection}>
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.link}
            className={({ isActive }) =>
              isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem
            }
            end={item.link === "/"}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className={styles.buttonSection}>
        <NavLink to="/join-waitlist" className={styles.authBtn}>
          Join Waitlist
        </NavLink>
      </div>

      {/* Hamburger Menu Button */}
      <button className={styles.hamburger} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${
          isMenuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <nav className={styles.mobileMenuSection}>
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.link}
              className={({ isActive }) =>
                isActive
                  ? `${styles.mobileMenuItem} ${styles.active}`
                  : styles.mobileMenuItem
              }
              end={item.link === "/"}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
        <div className={styles.mobileButtonSection}>
          <NavLink
            to="/join-waitlist"
            className={styles.mobileAuthBtn}
            onClick={() => setIsMenuOpen(false)}
          >
            Join Waitlist
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
