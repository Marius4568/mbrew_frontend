import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.styles.js';

const Button = ({ type, children, handleClick, className }) => {
  return (
    <S.Button className={className} onClick={handleClick} type={type}>
      {children}
    </S.Button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'reset', 'button', 'delete']),
  handleClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
