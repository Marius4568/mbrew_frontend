import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`

to {
    background-position-x: -200%;
  }
`;

export const LoadingProductSkeleton = styled.div`
  border-radius: 0.2rem;
  padding: 0 1rem 1rem 1rem;
  background: rgb(237, 237, 237);
  background: rgb(237, 237, 237);
  background: linear-gradient(
    90deg,
    rgba(237, 237, 237, 1) 0%,
    rgba(207, 207, 207, 1) 50%,
    rgba(237, 237, 237, 1) 100%
  );
  background-size: 200% 100%;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  animation: 2s ${shimmer} ease-out infinite;
`;
