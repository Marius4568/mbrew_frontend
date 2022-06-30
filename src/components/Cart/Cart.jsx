import React from 'react';
// import PropTypes from 'prop-types';
import * as S from './Cart.styles.js';

import { useGlobalShopContext } from '../../lib/shopContext';

import CartItem from '../CartItem/CartItem';

import { formatCurrency } from '../../util/formatCurrency.js';

import Button from '../Button/Button';

const Cart = () => {
  const { cartItems, setShowCart, totalPrice, onRemove, onAdd, totalQuantities } = useGlobalShopContext();

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
    <S.CartWrapper
      onClick={() => {
        document.body.style.overflowY = 'auto';
        return setShowCart(false);
      }}
    >
      <S.InnerCartWrapper onClick={(e) => e.stopPropagation()}>
        <S.CloseCart
          onClick={() => {
            document.body.style.overflowY = 'auto';
            return setShowCart(false);
          }}
        >
          close
        </S.CloseCart>

        {cartItems.length === 0 && (
          <S.EmptyCart>
            <S.EmptyCartWrapper>
              <span>Your cart is empty.</span>

              <Button
                handleClick={() => {
                  window.location.href = 'http://localhost:3000/#products';
                  document.body.style.overflowY = 'auto';
                  setShowCart(false);
                }}
              >
                Add items
              </Button>
            </S.EmptyCartWrapper>
          </S.EmptyCart>
        )}
        {cartItems.length >= 1 && (
          <S.Cart>
            <p>Cart items ({totalQuantities})</p>
            {cartItems.map((item) => (
              <CartItem key={item.slug} item={item} onRemove={onRemove} onAdd={onAdd}></CartItem>
            ))}
            <p className="total">Total: {formatCurrency(totalPrice)}</p>
            <Button handleClick={() => handleCheckout(cartItems)}>Checkout</Button>
          </S.Cart>
        )}
      </S.InnerCartWrapper>
    </S.CartWrapper>
  );
};

// Cart.propTypes = {
//   children: PropTypes.string.isRequired,
// };

export default Cart;
