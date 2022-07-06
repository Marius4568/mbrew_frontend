import styled from 'styled-components';

import CloseIcon from '@mui/icons-material/Close';

import Button from '../../Button/Button';

import { motion } from 'framer-motion';

export const CartWrapper = styled(motion.div)`
  position: absolute;
  width: 100%;
  min-height: 100vh;
  right: 0;
  top: 0;

  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  overflow-x: hidden;

  cursor: pointer;
`;

export const InnerCartWrapper = styled(motion.div)`
  width: 100vw;
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

export const Cart = styled(motion.div)`
  cursor: default;
  display: grid;
  place-items: center;
  min-height: 100vh;

  @media (min-width: 500px) {
    width: 26rem;
    right: 0;
  }

  min-height: 100%;
  top: 0;
  width: calc(100% - 4rem);
  padding: 2rem;
  position: absolute;
  z-index: 1;
  background-color: var(--main-light-color);

  cursor: default;
`;

export const CartInner = styled(motion.div)`
  place-self: normal center;

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

  @media (min-width: 500px) {
    width: 26rem;
    right: 0;
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

export const CartBottomWrap = styled(motion.div)`
  width: 100%;
`;

export const CheckoutButton = styled(Button)`
  width: 100%;
`;

export const EmptyCartInner = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > span {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;
