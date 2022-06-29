import React from 'react';
// import PropTypes from 'prop-types';
import * as S from './Cart.styles.js';

import { useGlobalShopContext } from '../../lib/shopContext';

import CartItem from '../CartItem/CartItem';

import { formatCurrency } from '../../util/formatCurrency.js';

const Cart = () => {
  const { cartItems, setShowCart, totalPrice, onRemove, onAdd } = useGlobalShopContext();

  const handleCheckout = async (products) => {
    const userToken = localStorage.getItem('token');
    try {
      const res = await fetch(`${process.env.REACT_APP_USERS_BACKEND_LINK}stripe/create_checkout_session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ products, userToken }),
      });
      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <S.CartWrapper>
      <button
        onClick={() => {
          document.body.style.overflowY = 'auto';
          return setShowCart(false);
        }}
      >
        close
      </button>

      {cartItems.length === 0 && <S.EmptyCart>empty</S.EmptyCart>}
      {cartItems.length >= 1 && (
        <S.Cart>
          {cartItems.map((item) => (
            <CartItem key={item.slug} item={item} onRemove={onRemove} onAdd={onAdd}></CartItem>
          ))}
          <p>Total: {formatCurrency(totalPrice)}</p>
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
