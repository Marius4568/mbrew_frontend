import styled from 'styled-components';

export const Section = styled.div`
  /* min-height: 100vh; */
  width: 100%;

  > h3 {
    text-align: center;
    font-size: 2rem;

    span {
      color: #f1e468;
    }
  }
`;

export const SectionInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
