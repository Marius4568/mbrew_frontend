import React from 'react';
import PropTypes from 'prop-types';
import * as S from './ProfileInfo.styles.js';

import Section from '../../Section/Section';

const ProfileInfo = ({ children }) => {
  return (
    <Section title="Info">
      <S.ProfileInfo>{children}</S.ProfileInfo>
    </Section>
  );
};

ProfileInfo.propTypes = {
  children: PropTypes.node,
};

export default ProfileInfo;
