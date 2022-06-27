import React from 'react';

import Products from '../components/Products/Products';
import Section from '../components/Section/Section';

const Home = () => {
  return (
    <>
      <Section title="Selection">
        <Products />
      </Section>
    </>
  );
};

export default Home;
