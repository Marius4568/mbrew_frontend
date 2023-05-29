import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.styles.js';

const Button = ({ children, handleClick, className, type }) => {
  return (
    <S.Button className={className} onClick={handleClick} type={type || "submit"}>
      {children}
    </S.Button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  handleClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
