import React from 'react';

import Products from '../components/Products/Products';
import Section from '../components/Section/Section';

import { useGlobalShopContext } from '../lib/shopContext';

const Home = () => {
  // const { qty } = useGlobalShopContext();

  return (
    <>
      <Section title="Selection">
        <Products />
      </Section>
    </>
  );
};

export default Home;
