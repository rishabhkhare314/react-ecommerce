import styles from "./Banner.module.css";
import SectionTitle from "../SectionTitle";

const Banner = () => {
  return (
    <section className={`${styles.bannerSection}`}>
      <div className={`${styles.banner} container`}>
        <div className={`${styles.bannerImg}`}>
          <img src="/images/banner-sofa.svg" height="100%" />
        </div>
        <div className={`${styles.bannerText}`}>
          <SectionTitle title="Unique Features Of leatest & Trending Poducts" position="left"/>
          <ul className={`${styles.listItems}`}>
            <li>All frames constructed with hardwood solids and laminates</li>
            <li>
              Reinforced with double wood dowels, glue, screw - nails corner
              blocks and machine nails
            </li>
            <li>Arms, backs and seats are structurally reinforced</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Banner;
