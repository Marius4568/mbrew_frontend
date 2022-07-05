import React from 'react';
import PropTypes from 'prop-types';
import * as S from './ProfileInfo.styles.js';

import Section from '../../Section/Section';

import { capitalize } from '../../../util/capitalize';

import moon from '../../../assets/img/mbrewMoon.svg';

const ProfileInfo = ({ children }) => {
  const { firstName, lastName, email } = JSON.parse(localStorage.getItem('userData'));
  console.log(firstName, lastName, email);

  return (
    <Section title="Info">
      <S.ProfileInfo>
        <img className="moon" src={moon} alt="moon background" />
        <S.ProfilePicture>
          <span>{firstName && lastName && firstName[0].toUpperCase() + lastName[0].toUpperCase()}</span>
        </S.ProfilePicture>
        <S.ProfileName>
          <span>{firstName && lastName && `${capitalize(firstName)} ${capitalize(lastName)}`}</span>
        </S.ProfileName>
        <S.ProfileEmail>
          <span>{email && email}</span>
        </S.ProfileEmail>

        {children}
      </S.ProfileInfo>
    </Section>
  );
};

ProfileInfo.propTypes = {
  children: PropTypes.node,
};

export default ProfileInfo;
