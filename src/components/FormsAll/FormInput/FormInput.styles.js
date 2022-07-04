import styled from 'styled-components';

export const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem 0 2rem;

  /*error message styles*/
  ~ .error-message {
    padding: 0 2rem;
    margin: 1rem 0 0 0;
    color: var(--accent-red-color);
    font-weight: 500;
    font-size: 0.85rem;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      top: -1rem;
      left: 2rem;
      width: calc(100% - 3.75rem);
      height: 0.2rem;

      background-color: var(--accent-red-color);
    }
  }
`;

export const InputInnerWrap = styled.div`
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: calc(100% + 0.25rem);
    left: 0;
    height: 0.2rem;
    background-color: var(--accent-yellow-color);
  }

  > label {
    font-weight: 600;
  }

  > input {
    margin-top: 0.5rem;
    width: 100%;
    border: none;
    border-bottom: 0.2rem solid var(--main-dark-color);
    padding-bottom: 0.25rem;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: var(--accent-grey-color);
      font-size: 0.9rem;
      font-weight: 500;
    }
  }
`;
