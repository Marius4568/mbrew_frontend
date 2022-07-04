import React from 'react';
// import PropTypes from 'prop-types';
import * as S from './LoadingProductSkeleton.styles.js';

const LoadingProductSkeleton = ({ width, height }) => {
  return <S.LoadingProductSkeleton style={{ width, height }}></S.LoadingProductSkeleton>;
};

// LoadingProductSkeleton.propTypes = {
//   children: PropTypes.string.isRequired,
// };

export default LoadingProductSkeleton;
