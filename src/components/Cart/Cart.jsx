import React from 'react';
// import PropTypes from 'prop-types';
import * as S from './Cart.styles.js';

import { useGlobalShopContext } from '../../lib/shopContext';

import CartItem from '../CartItem/CartItem';

const Cart = () => {
  const { cartItems, setShowCart } = useGlobalShopContext();

  return (
    <S.CartWrapper>
      <button onClick={() => setShowCart(false)}>close</button>

      {cartItems.length === 0 && <S.EmptyCart></S.EmptyCart>}
      {cartItems.length >= 1 && (
        <S.Cart>
          {cartItems.map((item) => (
            <CartItem key={item.slug} />
          ))}
          <button>derp</button>
        </S.Cart>
      )}
    </S.CartWrapper>
  );
};

// Cart.propTypes = {
//   children: PropTypes.string.isRequired,
// };

export default Cart;
