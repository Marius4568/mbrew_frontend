import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(720deg);
  }
`;

export const Spinner = styled.div`
  display: inline-block;
  position: absolute;
  width: 80px;
  height: 80px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  > div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 80%;
    height: 80%;
    margin: 10%;
    border: 0.5rem solid var(--main-dark-color);
    border-radius: 50%;
    animation: ${spin} 2s ease infinite;
    border-color: var(--main-dark-color) transparent transparent transparent;
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;
