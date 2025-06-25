import FeatureProducts from "../../components/FeatureProducts";
import HeroTitle from "../../components/HeroTitle";
import LatestProduct from "../../components/LatestProduct";
import { HeadingBar, NavBar } from "../../shared";
import { featureProducts, latestProductItems } from "./../../helper/constant";
const Home = () => {
  return (
    <div>
      <HeadingBar />
      <NavBar />
      <HeroTitle />
      <FeatureProducts products={featureProducts} />
      <LatestProduct products={latestProductItems} />
    </div>
  );
};

export default Home;
