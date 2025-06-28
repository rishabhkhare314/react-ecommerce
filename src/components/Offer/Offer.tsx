import SectionTitle from "../SectionTitle";
import styles from "./Offer.module.css";

const offers = [
  {
    id: 1,
    title: "24/7 Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mass purus gravida.",
    url: "/images/offer1.svg",
  },
  {
    id: 2,
    title: "24/7 Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mass purus gravida.",
    url: "/images/offer2.svg",
  },
  {
    id: 3,
    title: "24/7 Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mass purus gravida.",
    url: "/images/offer3.svg",
  },
  {
    id: 4,
    title: "24/7 Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mass purus gravida.",
    url: "/images/offer4.svg",
  },
];
const Offer = () => {
  return (
    <section className="container">
      <SectionTitle title="What Shopex Offer!" />
      <div className={`${styles.offerItems} `}>
        {offers.map((offer, index) => (
          <div className={`${styles.offerItem} `} key={index}>
            <div>
              <img
                src={offer.url}
                alt={offer.title}
                width="65px"
                height="65px"
              />
            </div>
            <div className={`${styles.offerTitle} `}>{offer.title}</div>
            <div className={`${styles.offerSubtitle} `}>
              {offer.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offer;
