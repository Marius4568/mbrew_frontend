import React from 'react';

import Dashboard from '../../components/DashboardAll/Dashboard/Dashboard';

const Profile = () => {
  const { firstName, lastName } = JSON.parse(localStorage.getItem('userData'));

  return <Dashboard userName={`${firstName} ${lastName}`} />;
};

export default Profile;
