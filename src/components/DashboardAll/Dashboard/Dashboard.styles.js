import styled from 'styled-components';

export const Dashboard = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(100% - 4rem);
  min-height: calc(100vh - var(--header-height-mobile) - var(--footer-height));

  @media screen and (min-width: 500px) {
    min-height: calc(100vh - var(--header-height-desktop) - var(--footer-height));
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1000px) {
    width: calc(100% - 8rem);
    padding: 2rem 4rem;
  }
`;

export const DashboardSideBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0;
  flex: 1;

  .dashboard-username {
    font-size: 1.3rem;
    font-weight: 600;
    text-align: center;
    margin: 0 0 0.5rem 0;
  }

  @media (min-width: 768px) {
    margin-top: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: var(--main-light-color);
    width: 20vw;
    max-width: 25rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    padding: calc(var(--header-height-desktop) + 4rem) 2rem 0 2rem;

    .dashboard-username {
      text-align: left;
    }
  }
`;

export const DashboardContent = styled.div`
  flex: 2;
  min-height: 25rem;
  overflow-y: none;

  @media (min-width: 768px) {
    flex: 2;
    width: 70%;
    padding-left: 30%;
  }

  @media (min-width: 1000px) {
    flex: 3;
  }

  @media (min-width: 1200px) {
    flex: 4;
  }
`;
