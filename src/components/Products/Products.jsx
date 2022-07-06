import React from 'react';
import * as S from './Products.styles.js';

import { Link } from 'react-router-dom';

import { useQuery } from 'react-query';
import { request } from 'graphql-request';
import { productsQuery } from '../../queries/graphqlQueries';
import { formatCurrency } from '../../util/formatCurrency';

import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from '../Button/Button';
// import Section from '../Section/Section';
import LoadingRectangleSkeleton from '../Loading/LoadingRectangleSkeleton/LoadingRectangleSkeleton';

import { useGlobalShopContext } from '../../contexts/shopContext';

const Products = () => {
  const { onAdd, setShowHeader } = useGlobalShopContext();

  const { data, status } = useQuery('products', () => {
    return request(process.env.REACT_APP_STRAPI_BACKEND_API_LINK, productsQuery);
  });

  if (status === 'loading') {
    return (
      <S.ProductsSection title="Selection">
        <S.Products id="products">
          <S.ProductsInnerWrap>
            <LoadingRectangleSkeleton width="16rem" height="25rem"></LoadingRectangleSkeleton>
            <LoadingRectangleSkeleton width="16rem" height="25rem"></LoadingRectangleSkeleton>
            <LoadingRectangleSkeleton width="16rem" height="25rem"></LoadingRectangleSkeleton>
          </S.ProductsInnerWrap>
        </S.Products>
      </S.ProductsSection>
    );
  }

  if (status === 'error') {
    return <div>Error :(</div>;
  }

  return (
    <S.ProductsSection className="products-section" title="Selection">
      <S.Products id="products">
        <S.ProductsInnerWrap>
          {data.products.data.map((product) => {
            const { title, price, slug, colorScheme } = product.attributes;
            let imageSrc = product.attributes.image.data.attributes.formats.small.url;
            imageSrc = imageSrc.replace('upload/', 'upload/f_avif,q_auto/');

            return (
              <S.Product key={slug}>
                <Link to={`/product/${slug}`}>
                  <div
                    className="imgWrapper"
                    color1={colorScheme && colorScheme.color1}
                    color2={colorScheme && colorScheme.color2}
                  >
                    <img src={imageSrc} alt="" />
                  </div>
                </Link>
                <h3>{title}</h3>
                <p className="price">{formatCurrency(price)}</p>
                <Button
                  handleClick={() => {
                    setShowHeader(true);
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
    </S.ProductsSection>
  );
};

export default Products;
