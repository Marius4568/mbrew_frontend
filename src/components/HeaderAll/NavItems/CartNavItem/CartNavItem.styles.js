import styled from 'styled-components';

export const CartNavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & .CartIconWrapper {
    position: relative;
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0.5rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background-color: var(--main-light-color);
    box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.1), 0 0.3rem 0.5rem 0 rgba(0, 0, 0, 0.05);
  }

  & .cartItemQuantity {
    position: absolute;
    display: block;
    background-color: var(--accent-yellow-color);
    border-radius: 50%;
    width: 1.2rem;
    height: 1.2rem;
    font-size: 0.75rem;
    font-weight: 600;
    display: grid;
    place-items: center;
    color: var(--main-dark-color);
    bottom: -5%;
    right: -15%;
  }

  /* & > p {
    font-weight: 500;
    font-size: 0.9rem;
    margin-top: 0.5rem;
  } */
`;
