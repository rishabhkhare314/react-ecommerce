import styles from "./HeadingBar.module.css";

const HeadingBar = () => {
  return (
    <div className={`${styles.headingSection} container`}>
      <div className={`${styles.contentSection}`}>
        <div className={`${styles.content}`}>
          <img src="/icons/message.svg" alt="message-icon" className="mr-4" />
          <p>mhhasanul@gmail.com</p>
        </div>
        <div className={`${styles.content}`}>
          <img src="/icons/phone-call.svg" alt="phone-icon" className="mr-4" />
          <p>(12345)67890</p>
        </div>
      </div>
      <div className={`${styles.contentSection}`}>
        <div className={`${styles.content}`}>
          <p>English</p>
        </div>
        <div className={`${styles.content}`}>
          <p>USD</p>
        </div>
        <div className={`${styles.content}`}>
          <p>Login</p>
          <img src="/icons/user.svg" alt="user-icon" className="ml-4" />
        </div>
        <div className={`${styles.content}`}>
          <p>Whitelist</p>
          <img src="/icons/heart.svg" alt="heart-icon" className="ml-4" />
        </div>
        <div className={`${styles.content}`}>
          <img src="/icons/cart.svg" alt="cart-icon" className="ml-4" />
        </div>
      </div>
    </div>
  );
};

export default HeadingBar;
