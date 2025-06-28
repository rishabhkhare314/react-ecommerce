import Banner from "../../components/Banner";
import FeatureProducts from "../../components/FeatureProducts";
import HeadingBar from "../../components/HeadingBar";
import HeroTitle from "../../components/HeroTitle";
import LatestProduct from "../../components/LatestProduct";
import NavBar from "../../components/NavBar";
import Offer from "../../components/Offer";
import { featureProducts, latestProductItems } from "./../../helper/constant";
const Home = () => {
  return (
    <div>
      <HeadingBar />
      <NavBar />
      <HeroTitle />
      <FeatureProducts products={featureProducts} />
      <LatestProduct products={latestProductItems} />
      <Offer />
      <Banner />
    </div>
  );
};

export default Home;
