import React from 'react';
// import PropTypes from 'prop-types';
import * as S from './CartNavItem.styles.js';

import { motion } from 'framer-motion';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useGlobalShopContext } from '../../../../contexts/shopContext.js';

// import Cart from '../Cart/Cart';

const CartNavItem = () => {
  const { setShowCart, totalQuantities } = useGlobalShopContext();

  return (
    <S.CartNavItem
      onClick={() => {
        document.querySelector('html').style.overflow = 'hidden';

        return setShowCart(true);
      }}
    >
      <div className="CartIconWrapper">
        <ShoppingCartIcon />
        {totalQuantities > 0 && (
          <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="cartItemQuantity">
            {totalQuantities}
          </motion.span>
        )}
      </div>
    </S.CartNavItem>
  );
};

export default CartNavItem;

// {showCart && <Cart />}
