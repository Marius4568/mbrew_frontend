import styled from 'styled-components';

export const DashboardSidebarLink = styled.div`
  display: inline-block;

  font-weight: 500;
  text-align: center;

  &.active {
    text-decoration: underline;
  }

  span {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    text-align: left;
  }
`;
