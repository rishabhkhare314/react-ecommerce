import FeatureProducts from "../../components/FeatureProducts";
import HeroTitle from "../../components/HeroTitle";
import { HeadingBar, NavBar } from "../../shared";

const Home = () => {
  return (
    <div>
      <HeadingBar />
      <NavBar />
      <HeroTitle />
      <FeatureProducts />
    </div>
  );
};

export default Home;
