import React, { useState } from 'react';

import * as S from './Cart.styles.js';

import { useGlobalShopContext } from '../../../contexts/shopContext';

import { fadeInFadeOut } from '../../../animations/variants/fadeInFadeOut.js';
import { slideFromRight } from '../../../animations/variants/slideFromRight.js';

import CartItem from '../CartItem/CartItem';
import DemoPaymentInstructions from '../../DemoPaymentInstructions/DemoPaymentInstructions.jsx';

import { formatCurrency } from '../../../util/formatCurrency.js';

import Button from '../../Button/Button';

const Cart = () => {
  const { cartItems, setShowCart, totalPrice, onRemove, onAdd, totalQuantities } = useGlobalShopContext();

  const [buttonLoading, setbuttonLoading] = useState('');

  const handleCheckout = async (products) => {
    const userToken = localStorage.getItem('token');
    try {
      setbuttonLoading('loading');
      console.log(process.env.REACT_APP_USERS_BACKEND_LINK)
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
      return err.message;
    }
    finally {
      setbuttonLoading('');
    }
  };

  return (
    <S.CartWrapper
      className="cart-wrapper"
      variants={fadeInFadeOut}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      onClick={() => {
        document.querySelector('html').style.overflowY = 'auto';
        document.querySelector('.cart-wrapper').style.overflow = 'hidden';
        document.querySelector('.cart-wrapper').style.cursor = 'default';
        return setShowCart(false);
      }}
    >
      <S.InnerCartWrapper onClick={(e) => e.stopPropagation()}>
        <S.CloseCart
          onClick={() => {
            document.querySelector('html').style.overflowY = 'auto';
            document.querySelector('.cart-wrapper').style.overflow = 'hidden';
            document.querySelector('.cart-wrapper').style.cursor = 'default';
            return setShowCart(false);
          }}
        >
          close
        </S.CloseCart>

        <S.Cart
          layout
          variants={slideFromRight}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {cartItems.length === 0 && (
            <S.EmptyCartInner
              variants={fadeInFadeOut}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <span>Your cart is empty.</span>

              <Button
                handleClick={() => {
                  window.location.href = `${process.env.REACT_APP_FRONTEND_LINK}#products`;
                  document.querySelector('html').style.overflowY = 'auto';
                  document.querySelector('.cart-wrapper').style.overflow = 'hidden';
                  setShowCart(false);
                }}
              >
                Add items
              </Button>
            </S.EmptyCartInner>
          )}
          {cartItems.length >= 1 && (
            <S.CartInner layout>
              <p>Cart items ({totalQuantities})</p>
              {cartItems.map((item) => (
                <CartItem key={item.slug} item={item} onRemove={onRemove} onAdd={onAdd}></CartItem>
              ))}
              <S.CartBottomWrap layout>
                <p className="total">Total: {formatCurrency(totalPrice)}</p>
                <S.CheckoutButton className={buttonLoading} handleClick={() => handleCheckout(cartItems)}>
                  Checkout
                </S.CheckoutButton>
                <DemoPaymentInstructions/>
              </S.CartBottomWrap>
            </S.CartInner>
          )}
        </S.Cart>
      </S.InnerCartWrapper>
    </S.CartWrapper>
  );
};

export default Cart;
