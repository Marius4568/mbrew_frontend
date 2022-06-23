import React from 'react';

import { useParams } from 'react-router';

const Product = () => {
  const { slug } = useParams();
  console.log(slug);
  return <div>Product</div>;
};

export default Product;
