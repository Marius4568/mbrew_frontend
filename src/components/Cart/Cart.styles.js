import styled from 'styled-components';

export const CartWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const EmptyCart = styled.div`
  width: 30%;
  height: 100%;
  top: 0;
  right: 0;
  position: absolute;
  z-index: 1;
  background-color: white;
`;

export const Cart = styled.div`
  position: absolute;
  z-index: 1;
  width: 30%;
  height: 100%;
  top: 0;
  right: 0;
  background-color: white;
`;
