import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.styles.js';

const Button = ({ children, handleClick, className }) => {
  return (
    <S.Button className={className} onClick={handleClick}>
      {children}
    </S.Button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  handleClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
