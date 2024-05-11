import React from 'react';
import "../styles/Components.css";

function HeroSection() {
  return (
    <section id="hero">
      <div className="container">
        <h2>Welcome to Cubes4U!</h2>
        <p style={{fontStyle: 'italic'}}>Discover a wide range of speedcubes for all skill levels!</p>
        <div className="shop-now">
          <a href="/products" className="btn">Shop Now</a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;