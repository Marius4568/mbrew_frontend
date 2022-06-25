import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Products.styles.js';

import { useNavigate } from 'react-router-dom';

import { useQuery } from 'react-query';
import { request } from 'graphql-request';
import { productsQuery } from '../../queries';

const Products = ({ children }) => {
  const { data, status } = useQuery('products', () => {
    return request(process.env.REACT_APP_STRAPI_BACKEND_API_LINK, productsQuery);
  });

  const navigate = useNavigate();

  const handleClick = (slug) => {
    navigate(`/product/${slug}`);
  };

  console.log(status, data);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error :(</div>;
  }

  return (
    <S.Products>
      {data.products.data.map((product) => {
        const { title, description, price, slug } = product.attributes;
        const imageSrc = product.attributes.image.data.attributes.formats.small.url;
        return (
          <div key={slug}>
            {' '}
            <img onClick={() => handleClick(slug)} src={imageSrc} alt="" />
            <p>{title}</p>
            <p>{description}</p>
            <p>${price}</p>
            <p>{slug}</p>
          </div>
        );
      })}
    </S.Products>
  );
};

Products.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Products;
