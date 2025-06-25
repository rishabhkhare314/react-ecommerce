import { Tabs } from "../../shared";
import styles from "./LatestProduct.module.css";

type Product = {
  id: number;
  url: string;
  price: string;
  defaultPrice: string;
  name: string;
};

type LatestProductProps = {
  products: Product[];
};

const LatestProduct: React.FC<LatestProductProps> = ({
  products,
}): React.ReactNode => {
  console.log(products);
  return (
    <section className="container" style={{margin: '2rem 0'}}>
      <h2 className={`${styles.title}`}>Latest Products</h2>
      <Tabs />
      <div className={`${styles.latestItems}`}>
        {products?.map((product) => {
          return (
            <div key={product?.id} className={`${styles.latestItem}`}>
              <span className={styles.saleTag}>Sale</span>
              <div  className={`${styles.featureImgWrapper}`}>
                <img src={product?.url} alt={product?.name}  className={`${styles.featureImg}`}/>
              </div>
              <div className={`${styles.featureContent}`}>
                <div className={`${styles.prdocutTitle}`}>{product?.name}</div>
                <div className={`${styles.price}`}>
                  <p className={`${styles.prdocutPrice}`}>${product?.price}</p>
                  <p className={`${styles.prdocutdefaultPrice}`}>${product?.defaultPrice}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LatestProduct;
