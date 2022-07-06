import React from 'react';
import * as S from './Nav.styles.js';

import CartNavItem from '../NavItems/CartNavItem/CartNavItem';
import ProfileNavItem from '../NavItems/ProfileNavItem/ProfileNavItem';
import { useNavigate, Link } from 'react-router-dom';

import { useAuth } from '../../../contexts/authContext';

import Logo from '../../../assets/img/logo.svg';

const Nav = () => {
  const navigate = useNavigate();
  const { token, setToken } = useAuth();

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

export default Nav;
