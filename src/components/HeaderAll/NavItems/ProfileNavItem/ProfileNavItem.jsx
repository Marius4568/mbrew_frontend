import React from 'react';
import * as S from './ProfileNavItem.styles.js';
import { Link } from 'react-router-dom';

import PersonIcon from '@mui/icons-material/Person';

import { useAuth } from '../../../../contexts/authContext.js';

const ProfileNavItem = () => {
  const { token } = useAuth();
  const userData = JSON.parse(localStorage.getItem('userData'));

  return (
    <S.ProfileNavItem>
      <Link to="/profile">
        <div className="ProfileIconWrapper">
          {!userData && !token && <PersonIcon />}
          {userData && token && <span>{userData.firstName[0].toUpperCase() + userData.lastName[0].toUpperCase()}</span>}
        </div>
      </Link>
    </S.ProfileNavItem>
  );
};

export default ProfileNavItem;
