import React from 'react';
// import PropTypes from 'prop-types';
import * as S from './CartItem.styles.js';

import { formatCurrency } from '../../util/formatCurrency.js';

const CartItem = (props) => {
  const { ...item } = props.item;
  const { title, price, quantity, image } = item;
  const { onRemove, onAdd } = props;
  const imgSrc = image.data.attributes.formats.thumbnail.url;

  return (
    <S.CartItem>
      <p>{title}</p>
      <img src={imgSrc} alt="" />
      <p>{formatCurrency(price)}</p>
      <p>quantity: {quantity}</p>
      <button onClick={() => onAdd(item, 1)}>+</button>
      <button onClick={() => onRemove(item)}>-</button>
      <button onClick={() => onRemove(item, quantity)}>Remove</button>
    </S.CartItem>
  );
};

// CartItem.propTypes = {
//   children: PropTypes.string.isRequired,
// };

export default CartItem;
