import React from 'react';
import PropTypes from 'prop-types';
import * as S from './FormInput.styles.js';

const FormInput = (props) => {
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

FormInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default FormInput;
