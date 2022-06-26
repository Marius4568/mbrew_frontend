import React from 'react';
import PropTypes from 'prop-types';
import * as S from './CartNavItem.styles.js';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartNavItem = () => {
  return (
    <S.CartNavItem>
      <div className="CartIconWrapper">
        <ShoppingCartIcon />
        <span className="cartItemQuantity">3</span>
      </div>

      {/* <p>Cart</p> */}
    </S.CartNavItem>
  );
};

export default CartNavItem;
