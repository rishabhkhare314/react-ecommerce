import styles from "./HeroTitle.module.css";

const HeroTitle = () => {
  return (
    <div className={`${styles.heroSection}`}>
      <div className={`${styles.heroSectionBanner}`}>
        <img src="/images/lamp.svg" alt="sofa-promotional" />
      </div>
      <div className={`${styles.heroSectionContentWrapper}`}>
        <div>
          <p className={`${styles.subTitle}`}>
            Best Furniture For Your Castle....
          </p>
          <h3 className={`${styles.title}`}>
            New Furniture Collection Trends in 2020
          </h3>
          <p className={`${styles.description}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <button className={`${styles.heroBtn}`}>Shop Now</button>
        </div>
        <div className={`${styles.heroSectionBanner2}`}>
          <img
            src="/images/sofa-promotional-header.svg"
            alt="sofa-promotional"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroTitle;
