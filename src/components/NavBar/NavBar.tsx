import { useState } from "react";
import styles from "./Navbar.module.css";

const NavBar = () => {
  const [isHmburgerMenuOpen, setisHmburgerMenuOpen] = useState(false);
  return (
    <div className="container">
      <div className={`${styles.hamburgerMenu}`}>
        <div onClick={() => setisHmburgerMenuOpen(!isHmburgerMenuOpen)}>=</div>
        <div
          className={`${isHmburgerMenuOpen ? styles.sidebarMenu : ""}`}
          style={{ display: isHmburgerMenuOpen ? "block" : "none" }}
        >
          <div
            className={`${styles.menuItem} ${styles.active}`}
            style={{
              color: "#fff",
              textAlign: "right",
              fontSize: "1.5rem",
              padding: "1rem",
            }}
            onClick={() => setisHmburgerMenuOpen(!isHmburgerMenuOpen)}
          >
            X
          </div>
          <div className={`${styles.menuItem} ${styles.active}`}>Home</div>
          <div className={`${styles.menuItem}`}>Pages</div>
          <div className={`${styles.menuItem}`}>Products</div>
          <div className={`${styles.menuItem}`}>Blog</div>
          <div className={`${styles.menuItem}`}>Shop</div>
          <div className={`${styles.menuItem}`}>Contacts</div>
        </div>
      </div>
      <div className={`${styles.menu}`}>
        <div className={`${styles.logoTitle}`}>
          <h2>Hekto</h2>
        </div>
        <div className={`${styles.navItems}`}>
          <div className={`${styles.menuItems}`}>
            <div className={`${styles.menuItem} ${styles.active}`}>Home</div>
            <div className={`${styles.menuItem}`}>Pages</div>
            <div className={`${styles.menuItem}`}>Products</div>
            <div className={`${styles.menuItem}`}>Blog</div>
            <div className={`${styles.menuItem}`}>Shop</div>
            <div className={`${styles.menuItem}`}>Contacts</div>
          </div>
          <div>
            <input type="text" placeholder="search item" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
