import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';

function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <AboutUs />
      <ContactUs />
    </div>
  );
}

export default HomePage;