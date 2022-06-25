import styled from 'styled-components';

export const Header = styled.header`
  background-color: transparent;
  height: auto;
  width: 100vw;
  position: fixed;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  & > img {
    height: 4rem;
    box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.1), 0 0.3rem 0.5rem 0 rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    cursor: pointer;
    display: inline-block;
    margin: 0 0 1rem 0;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding-top: 0;
    height: 6rem;
    & > img {
      margin: 0 0 0 2rem;
    }
  }
`;
