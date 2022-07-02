import styled from 'styled-components';

import Button from '../Button/Button';

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LeftSide = styled.div`
  padding: 2rem;
  display: grid;
  place-items: center;
`;

export const ImgWrapper = styled.div`
  width: 16rem;
  height: 16rem;
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
    user-select: none;
    -drag: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
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

export const RightSide = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  width: 75%;
  max-width: 50rem;
  margin: auto;

  @media screen and (min-width: 768px) {
    padding-top: 6rem;
  }
`;

export const Title = styled.h3`
  font-size: 2rem;
  margin: 0;
  text-align: center;
`;

export const Price = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  background-color: var(--accent-yellow-color);
  padding: 0.4rem 2rem;
  border-top-left-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
  border-bottom: 0.1rem solid black;
  border-right: 0.1rem solid black;
  text-align: center;
  margin-bottom: 1.5rem;
  width: calc(75% - 4rem);

  /* @media screen and (min-width: 1200px) {
width: 
  } */
`;

export const Description = styled.div`
  text-align: center;
  width: 75%;
  padding: 2rem;

  > p {
    font-size: 1.2rem;
    font-weight: 600;
  }
  > span {
    color: #a9a9a9;
  }

  @media screen and (min-width: 768px) {
    > p {
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 1200px) {
    > p {
      font-size: 2rem;
    }
  }
`;

export const AddToCartButton = styled(Button)``;
