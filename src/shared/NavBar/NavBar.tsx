import "./Navbar.css";

const NavBar = () => {
  return (
    <div className="container">
      <div className="menu">
        <div className="logo-title">
          <h2>Hekto</h2>
        </div>
        <div className="menu-items">
          <div>Home</div>
          <div>Pages</div>
          <div>Products</div>
          <div>Blog</div>
          <div>Shop</div>
          <div>Contacts</div>
        </div>
        <div>
          <input type="text" placeholder="search item" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
