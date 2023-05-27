import styled from 'styled-components';

export const ProfileNavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & .ProfileIconWrapper {
    width: fit-content;
    height: 1.5rem;
    padding: 0.5rem;
    border-radius: 50%;
    display: grid;
    font-size: 0.9rem;
    font-weight: 600;
    place-items: center;
    background-color: var(--main-light-color);
    box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.1), 0 0.3rem 0.5rem 0 rgba(0, 0, 0, 0.05);
  }
`;
