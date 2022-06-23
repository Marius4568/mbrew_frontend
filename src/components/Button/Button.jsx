import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.styles.js';

const Button = ({ type, children, handleClick }) => {
  return (
    <S.Button onClick={handleClick} type={type}>
      {children}
    </S.Button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['submit', 'reset', 'button', 'delete']),
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
