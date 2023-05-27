import styled from 'styled-components';

import Section from '../Section/Section';

export const ProductsSection = styled(Section)`
  margin-top: calc(var(--header-height-desktop) / -1);

  @media (min-width: 500px) {
    margin-top: calc(var(--header-height-desktop) / -2);
  }

  @media (min-width: 1000px) {
    margin-top: 0;
  }
`;

export const Products = styled.div`
  padding: 3rem;
  padding-bottom: 0;
  width: calc(100% - 6rem);
`;

export const ProductsInnerWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 20rem);
  align-items: center;
  justify-items: center;
  justify-content: center;
  grid-gap: 3rem;
  margin-bottom: 10rem;
`;

export const Product = styled.div`
  width: 16rem;
  height: 25rem;

  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  padding: 0 1rem 1rem 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.2rem;

  p {
    text-align: center;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }

  .imgWrapper {
    position: relative;
    margin-top: 1rem;

    img {
      width: 100%;
      height: 12rem;
      object-fit: contain;
      position: relative;
      z-index: 1;
      user-select: none;
      -drag: none;
      -moz-user-select: none;
      -webkit-user-drag: none;
      -webkit-user-select: none;
    }

    &:after {
      content: '';
      position: absolute;
      width: 12rem;
      height: 12rem;
      border-radius: 50%;

      background: ${(props) => props.children[0].props.children.props.color2};

      background: linear-gradient(
        0deg,
        ${(props) => props.children[0].props.children.props.color2} 0%,
        ${(props) => props.children[0].props.children.props.color1} 100%
      );
      top: calc(50%);
      left: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.1), 0 0.3rem 0.5rem 0 rgba(0, 0, 0, 0.05);
    }
  }

  .price {
    background-color: var(--accent-yellow-color);
    padding: 0.25rem 0;
    border-top-left-radius: 0.2rem;
    border-bottom-right-radius: 0.2rem;
    border-bottom: 0.1rem solid black;
    border-right: 0.1rem solid black;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 1.5rem;
    width: 100%;
  }

  button {
    font-size: 0.9rem;
  }
`;
