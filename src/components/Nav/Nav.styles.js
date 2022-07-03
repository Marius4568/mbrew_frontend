import styled from 'styled-components';

import LogoutIcon from '@mui/icons-material/Logout';

export const Nav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 500px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const LeftSide = styled.div`
  & > .Link img {
    margin-bottom: 1rem;
    height: 4rem;
    box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.1), 0 0.3rem 0.5rem 0 rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    cursor: pointer;
    display: inline-block;
    user-select: none;
    -drag: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
  }

  @media (min-width: 500px) {
    & > .Link img {
      margin: 0 0 0 2rem;
    }
  }
`;

export const RightSide = styled.div`
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;

  @media (min-width: 500px) {
    margin: 0 2rem 0 0;
  }
`;

export const Logout = styled(LogoutIcon)`
  width: 1.5rem;
  height: 1.5rem;
  padding: 0.5rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;
  background-color: var(--main-light-color);
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.1), 0 0.3rem 0.5rem 0 rgba(0, 0, 0, 0.05);
`;
