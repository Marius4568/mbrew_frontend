import React from 'react';
import * as S from './Footer.styles.js';

const Footer = () => {
  return (
    <S.Footer>
      <p>©{new Date().getFullYear()} Mbrew, Inc.</p>
    </S.Footer>
  );
};

export default Footer;
