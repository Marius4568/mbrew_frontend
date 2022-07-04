import styled from 'styled-components';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import Button from '../../Button/Button';

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100%);

  border-bottom: 0.1rem solid var(--main-dark-color);
  padding: 1rem 0;
  margin-bottom: 2rem;
`;

export const LeftSide = styled.div`
  display: flex;
  flex: 2;

  @media (min-width: 768px) {
    flex: 2;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > div {
    text-align: left;

    width: 100%;
  }
`;

export const Title = styled.div`
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }
`;

export const Price = styled.div`
  font-size: 0.9rem;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const ImgWrapper = styled.div`
  width: 5rem;
  height: 100%;
  display: grid;
  place-items: center;

  img {
    width: 50%;

    object-fit: cover;
    user-select: none;
    -drag: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
  }

  @media (min-width: 768px) {
    width: 7rem;
  }
`;

export const RightSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const QuantityControls = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1rem;

  > * {
    flex: 1;
    width: 100%;
    display: grid;
    place-items: center;
  }

  > svg {
    cursor: pointer;
    color: var(--main-light-color);
    background-color: var(--main-dark-color);
    border-radius: 0.2rem;
    transform: scale(0.8);
  }
`;

export const Add = styled(AddIcon)``;

export const ItemQuantity = styled.div`
  font-weight: 500;
`;

export const Substract = styled(RemoveIcon)``;

export const RemoveItem = styled(Button)`
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  width: 100%;
  background-color: var(--accent-yellow-color);
  color: var(--main-dark-color);

  &:hover {
    background-color: var(--accent-yellow-color);
  }

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;
