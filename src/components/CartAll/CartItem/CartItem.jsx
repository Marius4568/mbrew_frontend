import React from 'react';
import PropTypes from 'prop-types';
import * as S from './CartItem.styles.js';

import { formatCurrency } from '../../../util/formatCurrency.js';

const CartItem = (props) => {
  const { ...item } = props.item;
  const { title, price, quantity, image } = item;
  const { onRemove, onAdd } = props;
  const imgSrc = image.data.attributes.formats.thumbnail.url;

  return (
    <S.CartItem layout>
      <S.LeftSide>
        <S.ImgWrapper>
          <img src={imgSrc} alt={title} />
        </S.ImgWrapper>

        <S.ProductInfo>
          <S.Title>{title}</S.Title>
          <S.Price>{formatCurrency(price)}</S.Price>
        </S.ProductInfo>
      </S.LeftSide>
      <S.RightSide>
        <S.QuantityControls>
          <S.Substract onClick={() => onRemove(item)}></S.Substract>
          <S.ItemQuantity>{quantity}</S.ItemQuantity>
          <S.Add onClick={() => onAdd(item, 1)}></S.Add>
        </S.QuantityControls>

        <S.RemoveItem handleClick={() => onRemove(item, quantity)}>Remove</S.RemoveItem>
      </S.RightSide>
    </S.CartItem>
  );
};

CartItem.propTypes = {
  item: PropTypes.object,
  onRemove: PropTypes.func,
  onAdd: PropTypes.func,
};

export default CartItem;
