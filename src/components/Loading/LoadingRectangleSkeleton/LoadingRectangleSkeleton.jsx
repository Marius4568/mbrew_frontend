import React from 'react';
import PropTypes from 'prop-types';
import * as S from './LoadingRectangleSkeleton.styles.js';

const LoadingRectangleSkeleton = ({ width, height, margin }) => {
  return <S.LoadingRectangleSkeleton style={{ width, height, margin }}></S.LoadingRectangleSkeleton>;
};

LoadingRectangleSkeleton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
};

export default LoadingRectangleSkeleton;
