import styled from 'styled-components';

export const Dashboard = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(100% - 4rem);
  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1000px) {
    width: calc(100% - 8rem);
    padding: 4rem;
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
    .dashboard-username {
      text-align: left;
    }
  }
`;

export const DashboardContent = styled.div`
  flex: 2;
  min-height: 25rem;
  height: calc(70vh - 2rem);
  overflow-y: none;

  @media (min-width: 768px) {
    flex: 2;
  }

  @media (min-width: 1000px) {
    flex: 3;
  }

  @media (min-width: 1200px) {
    flex: 4;
  }
`;