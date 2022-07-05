import styled from 'styled-components';

export const ProfileInfo = styled.div`
  background-color: var(--main-light-color);

  box-shadow: rgba(0, 0, 0, 0.05) 0px -3px 6px, rgba(0, 0, 0, 0.025) 0px 3px 6px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 3px solid rgba(0, 0, 0, 0.05);
  border-left: 1px solid rgba(241, 228, 104, 0.4);
  border-right: 1px solid rgba(241, 228, 104, 0.4);
  padding: 2rem;
  margin-top: 2rem;
  width: calc(100% - 4rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  border-radius: 0.2rem;
  min-height: 25rem;
  position: relative;

  .moon {
    height: 100%;
    width: 100%;
    top: 0;
    position: absolute;
    opacity: 0.075;
  }

  @media (min-width: 768px) {
    width: calc(80% - 4rem);
  }
`;

export const ProfilePicture = styled.div`
  width: 5rem;
  height: 5rem;
  padding: 0.5rem;
  border-radius: 50%;
  border: 2px solid rgba(241, 228, 104, 0.4);
  display: grid;
  place-items: center;
  position: relative;
  z-index: 1;
  margin-top: 2rem;
  background-color: var(--main-light-color);
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.1), 0 0.3rem 0.5rem 0 rgba(0, 0, 0, 0.05);
  font-weight: 600;
  font-size: 1.8rem;
`;

export const ProfileName = styled.div`
  margin-top: 2rem;
  font-size: 1.1rem;
  font-weight: 600;
`;

export const ProfileEmail = styled.div`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.6);
`;
