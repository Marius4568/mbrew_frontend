import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import * as S from './Product.styles.js';

import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import { request } from 'graphql-request';
import { productQuery } from '../../queries';
import { formatCurrency } from '../../util/formatCurrency';
// import { Link } from 'react-router-dom';
import ProductAddToCart from '../ProductAddToCart/ProductAddToCart';

import { useGlobalShopContext } from '../../lib/shopContext';

const Product = () => {
  const { qty, onAdd, setQty } = useGlobalShopContext();

  // Reset qty

  useEffect(() => {
    setQty(1);
  }, [setQty]);

  const { slug } = useParams();
  const query = productQuery(slug);

  const { data, status } = useQuery('product', () => {
    return request(process.env.REACT_APP_STRAPI_BACKEND_API_LINK, query);
  });

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error :(</div>;
  }

  const { title, price, description, colorScheme } = data.products.data[0].attributes;
  const imageSrc = data.products.data[0].attributes.image.data.attributes.formats.medium.url;

  return (
    <S.Product>
      <S.LeftSide>
        <S.ImgWrapper className="imgWrapper" color1={colorScheme.color1} color2={colorScheme.color2}>
          <img src={imageSrc} alt={title} />
        </S.ImgWrapper>
      </S.LeftSide>
      <S.RightSide>
        <h3>{title}</h3>
        <p>{formatCurrency(price)}</p>
        <p>{description}</p>
        <ProductAddToCart>
          <S.AddToCartButton
            handleClick={() => {
              onAdd(data.products.data[0].attributes, qty);
            }}
          >
            Add to cart
          </S.AddToCartButton>
        </ProductAddToCart>
      </S.RightSide>
    </S.Product>
  );
};

// Product.propTypes = {
//   children: PropTypes.string.isRequired,
// };

export default Product;
