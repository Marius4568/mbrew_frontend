import React from 'react';
import PropTypes from 'prop-types';
import * as S from './HeroSection.styles.js';

import Button from '../Button/Button';

const HeroSection = ({ children }) => {
  return (
    <S.HeroSection>
      <S.LeftTriangle className="hero-triangle" />
      <S.HeroContent>
        <S.LeftSide>
          <S.HeroTitle>
            Mbrew<span>.</span>
          </S.HeroTitle>
          <S.HeroSubtitle>
            I'm not <span>kombucha-ing</span> around!
          </S.HeroSubtitle>
          <Button handleClick={() => (window.location.href = `${process.env.REACT_APP_FRONTEND_LINK}#products`)}>
            Order now
          </Button>
        </S.LeftSide>
        <S.RightSide>
          <S.HeroImg>
            <source
              media="(min-width: 1400px)"
              srcSet="https://res.cloudinary.com/dtfi6ppij/image/upload/f_avif,q_auto/v1656489348/large_editeddd_cans_ea82227f11.png"
            />
            <source
              media="(min-width: 900px)"
              srcSet="https://res.cloudinary.com/dtfi6ppij/image/upload/f_avif,q_auto/v1656489348/medium_editeddd_cans_ea82227f11.png"
            />
            <source
              media="(min-width: 400px)"
              srcSet="https://res.cloudinary.com/dtfi6ppij/image/upload/f_avif,q_auto/v1656489349/small_editeddd_cans_ea82227f11.png"
            />
            <img
              src="https://res.cloudinary.com/dtfi6ppij/image/upload/f_avif,q_auto/v1656489347/thumbnail_editeddd_cans_ea82227f11.png"
              alt="mbrew-cans-displayed"
            />
          </S.HeroImg>
        </S.RightSide>
      </S.HeroContent>

      <S.RightTriangle className="hero-triangle" />
      {children}
    </S.HeroSection>
  );
};

HeroSection.propTypes = {
  children: PropTypes.node,
};

export default HeroSection;
