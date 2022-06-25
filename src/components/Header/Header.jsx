import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Header.styles.js';
import Logo from '../../assets/img/logo.svg';
import Nav from '../Nav/Nav.jsx';

const Header = ({ includeNav }) => {
  return (
    <S.Header>
      <img src={Logo} alt="logo" />
      { <Nav />}
    </S.Header>
  );
};

Header.propTypes = {
  includeNav: PropTypes.bool.isRequired,
};

export default Header;
