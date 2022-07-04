import React from 'react';
// import PropTypes from 'prop-types';
import * as S from './ProductAddToCart.styles.js';

import { useGlobalShopContext } from '../../../contexts/shopContext';

const ProductAddToCart = ({ children }) => {
  const { qty, increaseQty, decreaseQty } = useGlobalShopContext();

  return (
    <S.ProductAddToCart>
      <S.QuantityContainer>
        <S.QuantityLabel>Quantity:</S.QuantityLabel>
        <S.QuantityHandling>
          <S.DecreaseQuantity onClick={() => decreaseQty(-1)}>-</S.DecreaseQuantity>
          <S.Quantity>{qty}</S.Quantity>
          <S.IncreaseQuantity onClick={() => increaseQty(+1)}>+</S.IncreaseQuantity>
        </S.QuantityHandling>
        {children}
      </S.QuantityContainer>
    </S.ProductAddToCart>
  );
};

export default ProductAddToCart;
