import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Nav.styles.js';

import CartNavItem from '../CartNavItem/CartNavItem';
import ProfileNavItem from '../ProfileNavItem/ProfileNavItem';
import { useNavigate, Link } from 'react-router-dom';

import { useAuth } from '../../lib/authContext';

import Logo from '../../assets/img/logo.svg';

const Nav = () => {
  const navigate = useNavigate();
  const { token, setToken } = useAuth();

  // const userData = JSON.parse(localStorage.getItem('userData'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    setToken(false);
    navigate('/', { replace: true });
  };

  return (
    <S.Nav>
      <S.LeftSide>
        <Link className="Link" to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </S.LeftSide>

      <S.RightSide>
        <ProfileNavItem />
        {token && <S.Logout onClick={handleLogout}>Logout</S.Logout>}
        <CartNavItem />
      </S.RightSide>
    </S.Nav>
  );
};

Nav.propTypes = {
  children: PropTypes.string,
};

export default Nav;
