import "./HeroTitle.css";

const HeroTitle = () => {
  return (
    <div className="hero-section">
      <div className="hero-section-banner">
        <img src="/images/lamp.svg" alt="sofa-promotional" />
      </div>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding: "1.5rem 0"}}>
      <div className="hero-section-content">
        <p className="sub-title">Best Furniture For Your Castle....</p>
        <h3 className="title">New Furniture Collection Trends in 2020</h3>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>
        <button className="hero-btn">Shop Now</button>
      </div>
      <div className="hero-section-banner2">
        <img src="/images/sofa-promotional-header.svg" alt="sofa-promotional" />
      </div>
      </div>
    </div>
  );
};

export default HeroTitle;
