import styled from 'styled-components';

import CloseIcon from '@mui/icons-material/Close';

export const CartWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

export const InnerCartWrapper = styled.div`
  > div {
    width: calc(100vw - 4rem);
    height: 100%;
    padding: 0 2rem;
    top: 0;

    position: absolute;
    z-index: 1;
    background-color: var(--main-light-color);
    overflow-y: auto;
    cursor: initial;

    @media (min-width: 500px) {
      width: 26rem;
      right: 0;
    }
  }
`;

export const CloseCart = styled(CloseIcon)`
  position: absolute;
  right: 2rem;
  top: 1.3rem;
  transform: scale(1);
  background-color: var(--main-light-color);
  transition: 0.3s;
  z-index: 3;
  cursor: pointer;
  border-radius: 50%;
  border: 0.1rem solid var(--main-dark-color);
  padding: 0.25rem;

  &:hover {
    background-color: var(--accent-yellow-color);

    transition: 0.3s;
  }

  @media (min-width: 768px) {
    transform: scale(1.1);
  }
`;

export const EmptyCart = styled.div`
  display: grid;
  place-items: center;
`;

export const EmptyCartWrapper = styled.div`
  min-height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > span {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

export const Cart = styled.div`
  > p:nth-child(1) {
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  .total {
    font-size: 1.2rem;
    font-weight: 600;
    padding: 1rem 0 1rem 0;
    text-align: center;
  }

  > button {
    width: 100%;
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    > p:nth-child(1) {
      font-size: 1.5rem;
      margin-bottom: 3rem;
    }

    .total {
      font-size: 1.3rem;
      padding: 2rem 0 1rem 0;
    }
  }
`;
