import React from 'react';

import Product from '../../components/SingleProduct/Product/Product';

import GoogleAnalytics from '../../components/GoogleAnalytics/GoogleAnalytics';

const ProductPage = () => {
  return (
    <>
    <GoogleAnalytics/>
      <Product />
    </>
  );
};

export default ProductPage;
