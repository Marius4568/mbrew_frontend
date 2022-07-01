import React from 'react';
// import PropTypes from 'prop-types';
import * as S from './FormInput.styles.js';

const FormInput = (props, children) => {
  const { label, id, value, onChange, onBlur, ...inputProps } = props;

  return (
    <S.FormInput>
      <S.InputInnerWrap>
        <label htmlFor={id}>{label}</label>
        <input value={value} onChange={onChange} onBlur={onBlur} id={id} {...inputProps} />
      </S.InputInnerWrap>
    </S.FormInput>
  );
};

export default FormInput;
