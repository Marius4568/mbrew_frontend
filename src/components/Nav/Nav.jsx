import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Nav.styles.js';

const Nav = ({ navItems }) => {
  return (
    <S.Nav>
      <p>Menu</p>
      <div>
        {navItems &&
          navItems.map((item) => {
            const Tag = item.tagName;
            return <Tag key={item.title}>{item.title}</Tag>;
          })}
      </div>
    </S.Nav>
  );
};

Nav.propTypes = {
  children: PropTypes.string,
};

export default Nav;
