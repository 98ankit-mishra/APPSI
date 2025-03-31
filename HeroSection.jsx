import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <h2>Appsi Studio</h2>
      <button className="back" onClick={"goback()"}>&#8592;Back</button>
      <h1>Explore Near Nature Spots</h1>
    </div>
  );
};

export default HeroSection;
