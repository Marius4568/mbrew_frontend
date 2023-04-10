import React from 'react';

import Products from '../../components/Products/Products';

import HeroSection from '../../components/HeroSection/HeroSection';
import GoogleAnalytics from '../../components/GoogleAnalytics/GoogleAnalytics';

const Home = () => {
  return (
    <>
    <GoogleAnalytics/>
      <HeroSection />

      <Products />
    </>
  );
};

export default Home;
