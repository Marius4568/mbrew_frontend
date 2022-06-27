import React from 'react';
// import PropTypes from 'prop-types';
import * as S from './Header.styles.js';

import Nav from '../Nav/Nav.jsx';
import { useGlobalShopContext } from '../../lib/shopContext.js';
import Cart from '../Cart/Cart';

const Header = () => {
  const { showCart } = useGlobalShopContext();
  return (
    <S.Header>
      {<Nav />}
      {showCart && <Cart />}
    </S.Header>
  );
};

export default Header;
