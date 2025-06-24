import "./HeadingBar.css";
const HeadingBar = () => {
  return (
    <div className="heading-section container">
      <div className="content-section">
        <div className="content">
          <img src="/icons/message.svg" alt="message-icon" className="mr-4"/>
          <p>mhhasanul@gmail.com</p>
        </div>
        <div className="content">
          <img src="/icons/phone-call.svg" alt="phone-icon"  className="mr-4"/>
          <p>(12345)67890</p>
        </div>
      </div>
      <div className="content-section">
        <div className="content">
          <p>English</p>
        </div>
        <div className="content">
          <p>USD</p>
        </div>
        <div className="content">
          <p>Login</p>
          <img src="/icons/user.svg" alt="user-icon"  className="ml-4"/>
        </div>
        <div className="content">
          <p>Whitelist</p>
          <img src="/icons/heart.svg" alt="heart-icon"  className="ml-4"/>
        </div>
        <div className="content">
          <img src="/icons/cart.svg" alt="cart-icon"  className="ml-4"/>
        </div>
      </div>
    </div>
  );
};

export default HeadingBar;
