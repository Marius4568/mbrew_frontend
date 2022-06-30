import styled, { keyframes } from 'styled-components';

const rotate = keyframes`

 100% { transform: rotate(1turn) }
`;

export const Button = styled.button`
  background-color: var(--main-dark-color);
  padding: 0.85rem 2rem;
  border: none;
  color: var(--main-light-color);
  border-radius: 0.2rem;
  cursor: pointer;
  font-weight: 600;
  position: relative;
  z-index: 0;
  overflow: hidden;

  &.loading {
    &::before {
      content: '';
      position: absolute;
      z-index: -2;
      left: -50%;
      top: -400%;
      width: 200%;
      height: 800%;
      background-color: var(--main-dark-color);
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: center;
      background-image: linear-gradient(var(--accent-yellow-color), var(--main-dark-color));
      animation-name: ${rotate};
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }

    &::after {
      content: '';
      position: absolute;
      z-index: -1;
      left: 0.25rem;
      top: 0.25rem;
      width: calc(100% - 0.5rem);
      height: calc(100% - 0.5rem);
      background: var(--main-dark-color);
      border-radius: 0.2rem;
    }
  }

  transition: background-color 0.3s;

  &:hover {
    transition: background-color 0.3s;
    background-color: rgb(50, 50, 50);
  }
`;
