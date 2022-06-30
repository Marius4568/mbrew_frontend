import React from 'react';
// import PropTypes from 'prop-types';
import * as S from './Products.styles.js';

import { Link } from 'react-router-dom';

import { useQuery } from 'react-query';
import { request } from 'graphql-request';
import { productsQuery } from '../../queries';
import { formatCurrency } from '../../util/formatCurrency';

import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from '../Button/Button';
import LoadingProductSkeleton from '../LoadingProductSkeleton/LoadingProductSkeleton';

import { useGlobalShopContext } from '../../lib/shopContext';

const Products = () => {
  const { onAdd } = useGlobalShopContext();

  const { data, status } = useQuery('products', () => {
    return request(process.env.REACT_APP_STRAPI_BACKEND_API_LINK, productsQuery);
  });

  if (status === 'loading') {
    return (
      <S.Products>
        <S.ProductsInnerWrap>
          <LoadingProductSkeleton width="16rem" height="25rem"></LoadingProductSkeleton>
          <LoadingProductSkeleton width="16rem" height="25rem"></LoadingProductSkeleton>
          <LoadingProductSkeleton width="16rem" height="25rem"></LoadingProductSkeleton>
        </S.ProductsInnerWrap>
      </S.Products>
    );
  }

  if (status === 'error') {
    return <div>Error :(</div>;
  }

  return (
    <S.Products id="products">
      <S.ProductsInnerWrap>
        {data.products.data.map((product) => {
          const { title, price, slug, colorScheme } = product.attributes;
          const imageSrc = product.attributes.image.data.attributes.formats.small.url;

          return (
            <S.Product key={slug}>
              <Link to={`/product/${slug}`}>
                <div className="imgWrapper" color1={colorScheme.color1} color2={colorScheme.color2}>
                  <img src={imageSrc} alt="" />
                </div>
              </Link>
              <h3>{title}</h3>
              <p className="price">{formatCurrency(price)}</p>
              <Button
                handleClick={() => {
                  toast.success(`${title} was added to cart!`);
                  onAdd(product.attributes, 1);
                }}
              >
                Add to cart
              </Button>
            </S.Product>
          );
        })}
      </S.ProductsInnerWrap>
      <ToastContainer
        className="toast-position"
        position="top-center"
        autoClose={1200}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        transition={Slide}
      />
    </S.Products>
  );
};

// Products.propTypes = {
//   children: PropTypes.string.isRequired,
// };

export default Products;
