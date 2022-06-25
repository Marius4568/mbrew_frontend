import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;

  & > p {
    font-size: 1.1rem;
    font-weight: 600;
    padding: 1rem;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    width: 50%;

    & > p {
      display: none;
    }
  }
`;
