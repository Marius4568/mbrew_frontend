import styled from 'styled-components';

export const Header = styled.header`
  background-color: var(--main-light-color);
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.05), 0 0.3rem 1rem 0 rgba(0, 0, 0, 0.05);
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  padding-top: 1rem;

  @media screen and (min-width: 500px) {
    padding: 1rem 0;
  }
`;
