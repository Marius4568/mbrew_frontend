import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  font-family: 'Montserrat', sans-serif;

  & > .Link img {
    height: 4rem;
    box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.1), 0 0.3rem 0.5rem 0 rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    cursor: pointer;
    display: inline-block;
  }

  @media screen and (min-width: 768px) {
  }
`;
