import React from 'react';
// import PropTypes from 'prop-types';
import * as S from './Products.styles.js';

import { Link } from 'react-router-dom';

import { useQuery } from 'react-query';
import { request } from 'graphql-request';
import { productsQuery } from '../../queries';
import { formatCurrency } from '../../util/formatCurrency';

import Button from '../Button/Button';

const Products = () => {
  const { data, status } = useQuery('products', () => {
    return request(process.env.REACT_APP_STRAPI_BACKEND_API_LINK, productsQuery);
  });

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error :(</div>;
  }

  return (
    <S.Products>
      <S.ProductsInnerWrap>
        {data.products.data.map((product) => {
          const { title, price, slug, colorScheme } = product.attributes;
          const imageSrc = product.attributes.image.data.attributes.formats.small.url;
          return (
            <S.Product key={slug}>
              {' '}
              <div className="imgWrapper" color1={colorScheme.color1} color2={colorScheme.color2}>
                <img src={imageSrc} alt="" />
              </div>
              <p>{title}</p>
              <p>{formatCurrency(price)}</p>
              <Link to={`/product/${slug}`}>
                <Button>Order</Button>
              </Link>
            </S.Product>
          );
        })}
      </S.ProductsInnerWrap>
    </S.Products>
  );
};

// Products.propTypes = {
//   children: PropTypes.string.isRequired,
// };

export default Products;
