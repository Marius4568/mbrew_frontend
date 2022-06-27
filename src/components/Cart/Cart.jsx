import React from 'react';
// import PropTypes from 'prop-types';
import * as S from './Cart.styles.js';

import { useGlobalShopContext } from '../../lib/shopContext';

import CartItem from '../CartItem/CartItem';

const Cart = () => {
  const { cartItems, setShowCart } = useGlobalShopContext();

  const handleCheckout = async (products) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_USERS_BACKEND_LINK_TESTING}stripe/create_checkout_session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ products }),
      });
      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error(err.error);
    }
  };

  return (
    <S.CartWrapper>
      <button onClick={() => setShowCart(false)}>close</button>

      {cartItems.length === 0 && <S.EmptyCart></S.EmptyCart>}
      {cartItems.length >= 1 && (
        <S.Cart>
          {cartItems.map((item) => (
            <CartItem key={item.slug} />
          ))}
          <button onClick={() => handleCheckout(cartItems)}>Checkout</button>
        </S.Cart>
      )}
    </S.CartWrapper>
  );
};

// Cart.propTypes = {
//   children: PropTypes.string.isRequired,
// };

export default Cart;
