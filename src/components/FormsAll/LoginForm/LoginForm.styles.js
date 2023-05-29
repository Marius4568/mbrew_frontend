import styled from 'styled-components';

export const LoginForm = styled.section`
  background-color: var(--accent-grey-color);
  padding: 2rem;
`;

export const LoginFormWrapper = styled.section`
  border: 0.1rem solid rgba(0, 0, 0, 0.6);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 0.2rem;
  min-width: 16rem;
  width: 60%;
  max-width: 40rem;
  padding: 0;
  position: relative;
  margin-top: 2rem;

  @media (min-width: 500px) {
    margin-top: 3rem;
    
    button {
      width: auto
    }
  }

  @media (max-width: 700px) { 
    button {
      width: calc(100% - 4rem);
      font-size: 0.85rem;
    }
  }

  @media (min-width: 1000px) {
    margin-top: 4rem;
  }

  button {
    margin: 2rem 0 0 2rem;
  }

  form > p {
    margin: 2rem;
    font-size: 0.9rem;
    font-weight: 500;

    a {
      display: inline-block;
      font-weight: 700;
      text-decoration: underline;
    }
  }
`;

export const LemonDecoration = styled.img`
  position: absolute;
  width: 5rem;
  user-select: none;
  -drag: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;

  &:first-child {
    transform: rotate(170deg);
    top: -2.5rem;
    left: -2rem;
  }
  &:last-child {
    transform: rotate(-10deg);
    bottom: -2.5rem;
    right: -2rem;
  }

  @media (min-width: 500px) {
    width: 6rem;

    &:first-child {
      transform: rotate(180deg);
      top: -3.25rem;
      left: -2.25rem;
    }
    &:last-child {
      transform: rotate(0deg);
      bottom: -3.25rem;
      right: -2.25rem;
    }
  }

  @media (min-width: 1000px) {
    width: 7.5rem;

    &:first-child {
      transform: rotate(180deg);
      top: -3.75rem;
      left: -2.75rem;
    }
    &:last-child {
      transform: rotate(0deg);
      bottom: -3.75rem;
      right: -2.75rem;
    }
  }
`;
