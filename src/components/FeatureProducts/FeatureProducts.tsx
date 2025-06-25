import styles from "./FeatureProducts.module.css";

type FeatureProduct = {
  id: number;
  url: string;
  title: string;
  code: string;
  price: string;
};

type FeatureProductsProps = {
  products: FeatureProduct[];
};

const FeatureProducts: React.FC<FeatureProductsProps> = ({
  products,
}): React.ReactElement => {
  return (
    <section className={`${styles.featuredSection} container`}>
      <h2 className={`${styles.title}`}>Featured Products</h2>
      <div  className={`${styles.featureCard}`}>
      {products?.map((product: FeatureProduct) => (
        <div className={`${styles.card}`} key={product?.id}>
          <div className={`${styles.imageWrapper}`}>
            <img src={product?.url} alt={product?.title} />
          </div>
          <div className={`${styles.content}`}>
            <p className={`${styles.itemTitle}`}>{product?.title}</p>
            <p className={`${styles.itemCode}`}>{product?.code}</p>
            <p className={`${styles.itemPrice}`}>${product?.price}</p>
          </div>
        </div>
      ))}
      </div>
    </section>
  );
};

export default FeatureProducts;
