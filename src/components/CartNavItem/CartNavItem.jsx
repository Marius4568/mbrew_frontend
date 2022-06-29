import React from 'react';
// import PropTypes from 'prop-types';
import * as S from './CartNavItem.styles.js';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useGlobalShopContext } from '../../lib/shopContext.js';

// import Cart from '../Cart/Cart';

const CartNavItem = () => {
  const { setShowCart, totalQuantities } = useGlobalShopContext();

  return (
    <S.CartNavItem
      onClick={() => {
        document.body.style.overflow = 'hidden';
        return setShowCart(true);
      }}
    >
      <div className="CartIconWrapper">
        <ShoppingCartIcon />
        {totalQuantities > 0 && <span className="cartItemQuantity">{totalQuantities}</span>}
      </div>
    </S.CartNavItem>
  );
};

export default CartNavItem;

// {showCart && <Cart />}
