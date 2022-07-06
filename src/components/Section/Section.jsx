import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Section.styles.js';

const Section = ({ children, title, className }) => {
  return (
    <S.Section className={className}>
      <h2>
        {title}
        <span> .</span>
      </h2>
      <S.SectionInner>{children}</S.SectionInner>
    </S.Section>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Section;
