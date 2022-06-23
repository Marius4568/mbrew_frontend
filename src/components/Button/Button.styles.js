import styled from 'styled-components';

export const Button = styled.button`
  background-color: #333;
  padding: 0.75rem 1.5rem;
  border: none;
  color: #fff;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    transition: background-color 0.3s;
    background-color: #444;
  }
`;
