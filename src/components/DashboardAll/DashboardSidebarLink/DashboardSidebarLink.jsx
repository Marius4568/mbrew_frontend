import React from 'react';
import PropTypes from 'prop-types';
import * as S from './DashboardSidebarLink.styles.js';

const DashboardSidebarLink = ({ title, handleClick, className }) => {
  return (
    <S.DashboardSidebarLink className={className}>
      <span onClick={handleClick}>{title}</span>
    </S.DashboardSidebarLink>
  );
};

DashboardSidebarLink.propTypes = {
  title: PropTypes.string,
  handleClick: PropTypes.func,
  className: PropTypes.string,
};

export default DashboardSidebarLink;
