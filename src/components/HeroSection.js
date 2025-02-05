import React from "react";
import "./HeroSection.css"; // Make sure the CSS file exists

const HeroSection = () => {
  return (
    <div className="hero-section">
      <h1>Welcome to Farmer's E-Commerce</h1>
      <p>Fresh farm products delivered to your doorstep</p>
      <button className="shop-now-btn">Shop Now</button>
    </div>
  );
};

export default HeroSection;
