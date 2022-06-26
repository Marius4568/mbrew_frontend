import styled from 'styled-components';

export const Products = styled.div`
  border: 5px solid black;
  padding: 2rem;
`;

export const ProductsInnerWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 20rem);
  align-items: center;
  justify-items: center;
  justify-content: center;
  grid-gap: 2rem;
`;

export const Product = styled.div`
  min-width: 16rem;
  width: 30vw;
  max-width: 20rem;
  height: 25rem;
  border: 1px solid black;

  .imgWrapper {
    position: relative;
    margin-top: 1rem;

    img {
      width: 100%;
      height: 12rem;
      object-fit: contain;
      position: relative;
      z-index: 1;
    }

    &:after {
      content: '';
      position: absolute;
      width: 12rem;
      height: 12rem;
      border-radius: 50%;
      background: ${'#111'};
      background: linear-gradient(
        0deg,
        ${(props) => props.children[1].props.color2} 0%,
        ${(props) => props.children[1].props.color1} 100%
      );
      top: calc(50%);
      left: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.1), 0 0.3rem 0.5rem 0 rgba(0, 0, 0, 0.05);
    }
  }

  /* @media screen and (min-width: 768px) {
    
  } */
`;
