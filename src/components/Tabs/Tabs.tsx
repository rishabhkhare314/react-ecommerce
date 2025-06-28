import styles from "./Tabs.module.css";
const Tabs = () => {
  const tabs = [
    {
      id: 1,
      name: "New Arrival",
    },
    {
      id: 2,
      name: "Best Seller",
    },
    {
      id: 3,
      name: "Featured",
    },
    {
      id: 4,
      name: "Special Offer",
    },
  ];
  return (
    <div className={`${styles.tabItems}`}>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`${styles.tabItem} ${tab.id === 1 && styles.active}`}
        >
          {tab.name}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
