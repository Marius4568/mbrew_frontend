import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './Dashboard.styles.js';

import DashboardSidebarLink from '../DashboardSidebarLink/DashboardSidebarLink';
import { dashboardSidebarLinks } from '../dashboardSidebarLinks';
import { renderLinkComponent } from '../dashboardSidebarLinks';

const Dashboard = ({ userName, children }) => {
  const [content, setContent] = useState('PaymentsTable');
  const [activeLink, setActiveLink] = useState('Payment History');

  return (
    <S.Dashboard>
      <S.DashboardSideBar>
        <p className="dashboard-username">{userName}</p>
        {dashboardSidebarLinks &&
          dashboardSidebarLinks.map((link) => (
            <DashboardSidebarLink
              key={link.title}
              handleClick={() => {
                setActiveLink(link.title);
                setContent(link.componentToRender);
              }}
              className={activeLink === link.title ? 'active' : ''}
              title={link.title}
            />
          ))}
      </S.DashboardSideBar>

      <S.DashboardContent>{renderLinkComponent(content)}</S.DashboardContent>
    </S.Dashboard>
  );
};

Dashboard.propTypes = {
  children: PropTypes.node,
};

export default Dashboard;
