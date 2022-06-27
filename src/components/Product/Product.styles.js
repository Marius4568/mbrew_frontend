import styled from 'styled-components';

import Button from '../Button/Button';

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin: auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LeftSide = styled.div``;

export const ImgWrapper = styled.div`
  width: 15rem;
  height: 15rem;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 90%;
    height: 90%;
    border-radius: 50%;

    background: ${(props) => props.color1};
    background: linear-gradient(0deg, ${(props) => props.color2} 0%, ${(props) => props.color1} 100%);
    top: calc(50%);
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.1), 0 0.3rem 0.5rem 0 rgba(0, 0, 0, 0.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: relative;
    z-index: 1;
  }

  @media screen and (min-width: 768px) {
    width: 25rem;
    height: 25rem;
    position: relative;
  }

  @media screen and (min-width: 1200px) {
    width: 30rem;
    height: 30rem;
    position: relative;
  }
`;

export const RightSide = styled.div``;

export const AddToCartButton = styled(Button)``;
