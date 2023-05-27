import styled from 'styled-components';

export const Section = styled.div`
  width: 100%;
  padding-bottom: 10rem;

  > h2 {
    text-align: center;
    font-size: 2rem;

    span {
      color: #f1e468;
    }
  }

  @media (min-width: 500px) {
    > h2 {
      text-align: center;
      font-size: 2.2rem;
    }
  }

  @media (min-width: 768px) {
    > h2 {
      text-align: center;
      font-size: 2.5rem;
    }
  }
`;

export const SectionInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
