import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Header.styles.js';

import Nav from '../Nav/Nav.jsx';

const Header = () => {
  return <S.Header>{<Nav />}</S.Header>;
};

export default Header;
