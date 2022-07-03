import styled from 'styled-components';

export const HeroSection = styled.div`
  /* background-color: #eee; */
  height: calc(100vh);
  max-height: 45rem;
  min-height: 30rem;
  width: 100vw;
  max-width: 1920px;
  position: relative;
  top: -10rem;
  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 1rem 2rem -2rem rgba(0, 0, 0, 0.2);

  .hero-triangle {
    position: absolute;
  }

  @media (min-width: 500px) {
    height: calc(100vh + 6.25rem);
    min-height: 45rem;
    top: -6.25rem;
    align-items: flex-start;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1000px) {
    min-height: 50rem;
    align-items: center;
    max-height: 60rem;
  }
`;

export const LeftTriangle = styled.div`
  width: 0;
  height: 0;
  border-top: 12rem solid var(--accent-yellow-color);
  border-right: 12rem solid transparent;
  top: 0;
  left: 0;

  @media (min-width: 500px) {
    border-top: 18rem solid var(--accent-yellow-color);
    border-right: 18rem solid transparent;
  }

  @media (min-width: 768px) {
    border-top: 20rem solid var(--accent-yellow-color);
    border-right: 20rem solid transparent;
  }

  @media (min-width: 1000px) {
    border-top: 25rem solid var(--accent-yellow-color);
    border-right: 25rem solid transparent;
  }

  @media (min-width: 1200px) {
    border-top: 30rem solid var(--accent-yellow-color);
    border-right: 30rem solid transparent;
  }
`;

export const RightTriangle = styled.div`
  width: 0;
  height: 0;
  border-bottom: 12rem solid var(--accent-yellow-color);
  border-left: 12rem solid transparent;
  bottom: 0;
  right: 0;

  @media (min-width: 500px) {
    border-bottom: 18rem solid var(--accent-yellow-color);
    border-left: 18rem solid transparent;
  }

  @media (min-width: 768px) {
    border-bottom: 20rem solid var(--accent-yellow-color);
    border-left: 20rem solid transparent;
  }

  @media (min-width: 1000px) {
    border-bottom: 25rem solid var(--accent-yellow-color);
    border-left: 25rem solid transparent;
  }

  @media (min-width: 1200px) {
    border-bottom: 30rem solid var(--accent-yellow-color);
    border-left: 30rem solid transparent;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 500px) {
  }

  @media (min-width: 1000px) {
    flex-direction: row;
    margin-left: 10rem;
    padding-bottom: 10rem;
  }
`;

export const LeftSide = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 500px) {
    padding-top: 10rem;
    text-align: left;
    align-items: flex-start;
  }

  @media (min-width: 1000px) {
    padding-top: 0;
    margin-right: 5rem;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  span {
    color: var(--accent-yellow-color);
  }

  @media (min-width: 500px) {
    font-size: 3rem;
  }

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }

  @media (min-width: 1200px) {
    font-size: 4rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-weight: 500;
  margin-bottom: 2rem;
  width: 75%;

  span {
    position: relative;
    display: inline-block;

    &:after {
      content: '';
      display: block;
      width: 0%;
      height: 0.3rem;
      background-color: var(--accent-yellow-color);
      transition: width 1s;
    }

    &:hover {
      &:after {
        width: 100%;
        transition: width 1s;
      }
    }
  }

  @media (min-width: 500px) {
    font-size: 1.1rem;
    width: 100%;
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.3rem;
  }
`;

export const RightSide = styled.div`
  position: absolute;
  z-index: 1;
  display: none;

  @media (min-width: 500px) {
    display: block;
    width: 17rem;
    height: 17rem;
    right: 3rem;
    bottom: 6.25rem;
  }

  @media (min-width: 768px) {
    width: 20rem;
    height: 20rem;
    bottom: 7rem;
  }

  @media (min-width: 1000px) {
    position: static;
    width: 22rem;
    height: 22rem;
  }

  @media (min-width: 1200px) {
    position: static;
    width: 25rem;
    height: 25rem;
  }

  @media (min-width: 1400px) {
    position: static;
    width: 28rem;
    height: 28rem;
  }
`;

export const HeroImg = styled.picture`
  img {
    width: 100%;
    object-fit: contain;
  }

  @media (min-width: 500px) {
  }

  @media (min-width: 1000px) {
  }
`;
