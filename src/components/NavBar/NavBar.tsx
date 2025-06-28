import styles from "./Navbar.module.css";

const NavBar = () => {
  return (
    <div className="container">
      <div className={`${styles.menu}`}>
        <div className={`${styles.logoTitle}`}>
          <h2>Hekto</h2>
        </div>
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
  );
};

export default NavBar;
