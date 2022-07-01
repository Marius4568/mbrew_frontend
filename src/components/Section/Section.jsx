import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Section.styles.js';

const Section = ({ children, title }) => {
  return (
    <S.Section>
      <h3>
        {title}
        <span> .</span>
      </h3>
      <S.SectionInner>{children}</S.SectionInner>
    </S.Section>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

export default Section;
