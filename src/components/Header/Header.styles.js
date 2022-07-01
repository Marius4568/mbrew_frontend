import styled from 'styled-components';

export const Header = styled.header`
  background-color: var(--main-light-color);

  width: 100%;
  position: sticky;
  top: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  height: 4.5rem;
  margin-bottom: 8.5rem;
  @media screen and (min-width: 500px) {
    margin-bottom: 4.5rem;
  }
`;
