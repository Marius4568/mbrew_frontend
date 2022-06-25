import React from 'react';
// import PropTypes from 'prop-types';
import * as S from './FormInput.styles.js';

const FormInput = (props) => {
  const { label, id, ...inputProps } = props;

  return (
    <S.FormInput>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...inputProps} />
    </S.FormInput>
  );
};

export default FormInput;
