import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import * as S from './Product.styles.js';

import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import { request } from 'graphql-request';
import { productQuery } from '../../../queries/graphqlQueries';
import { formatCurrency } from '../../../util/formatCurrency';
// import { Link } from 'react-router-dom';
import ProductAddToCart from '../ProductAddToCart/ProductAddToCart';

import { useGlobalShopContext } from '../../../contexts/shopContext';

const Product = () => {
  const { qty, onAdd, setQty, setShowHeader } = useGlobalShopContext();

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
    return <S.Product>Loading...</S.Product>;
  }

  if (status === 'error') {
    return <div>Error :(</div>;
  }

  const { title, price, description, colorScheme } = data.products.data[0].attributes;
  let imageSrc = data.products.data[0].attributes.image.data.attributes.formats.medium.url;
  imageSrc = imageSrc.replace('upload/', 'upload/f_avif,q_auto/');

  return (
    <>
      <S.Product>
        <S.LeftSide>
          <S.ImgWrapper
            className="imgWrapper"
            color1={colorScheme && colorScheme.color1}
            color2={colorScheme && colorScheme.color2}
          >
            <img src={imageSrc} alt={title} />
          </S.ImgWrapper>
        </S.LeftSide>
        <S.RightSide>
          <S.Title>{title}</S.Title>
          <S.Price>{formatCurrency(price)}</S.Price>

          <ProductAddToCart>
            <S.AddToCartButton
              handleClick={() => {
                setShowHeader(true);
                toast.success(`${title} was added to cart!`);
                onAdd(data.products.data[0].attributes, qty);
              }}
            >
              Add to cart
            </S.AddToCartButton>
          </ProductAddToCart>
          <S.Description>
            <p>Description:</p> <span>{description}</span>
          </S.Description>
        </S.RightSide>
        <ToastContainer
          className="toast-position"
          position="top-center"
          autoClose={1200}
          pauseOnFocusLoss={false}
          pauseOnHover={false}
          transition={Slide}
        />
      </S.Product>
    </>
  );
};

// Product.propTypes = {
//   children: PropTypes.string.isRequired,
// };

export default Product;
