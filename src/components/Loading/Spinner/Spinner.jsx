import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Spinner.styles.js';

const Spinner = ({ width, height, margin }) => {
  return (
    <S.Spinner style={{ width, height, margin }}>
      <div></div>
      <div></div>
      <div></div>
    </S.Spinner>
  );
};

Spinner.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
};

export default Spinner;
