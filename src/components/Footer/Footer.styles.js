import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: var(--main-dark-color);
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.05), 0 0.3rem 1rem 0 rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 1920px;
  height: 5rem;
  /* margin-top: 5rem; */
  /* margin-bottom: -5rem; */
  position: absolute;
  bottom: 0;
  display: grid;
  place-items: center;

  p {
    color: var(--main-light-color);
  }
`;
