import React from 'react';
import PropTypes from 'prop-types';
import * as S from './ProfileNavItem.styles.js';
import { Link } from 'react-router-dom';

import PersonIcon from '@mui/icons-material/Person';

import { useAuth } from '../../lib/authContext.js';

const ProfileNavItem = () => {
  const { token } = useAuth();
  const userData = JSON.parse(localStorage.getItem('userData'));

  return (
    <S.ProfileNavItem>
      <Link to="/dashboard">
        <div className="ProfileIconWrapper">
          {!userData && !token && <PersonIcon />}
          {userData && token && <span>{userData.firstName[0] + userData.lastName[0]}</span>}
        </div>
      </Link>
    </S.ProfileNavItem>
  );
};

export default ProfileNavItem;
