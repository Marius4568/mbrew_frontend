import React from 'react';

import Dashboard from '../../components/DashboardAll/Dashboard/Dashboard';

import { capitalize } from '../../util/capitalize';

import GoogleAnalytics from '../../components/GoogleAnalytics/GoogleAnalytics';

const Profile = () => {
  const { firstName, lastName } = JSON.parse(localStorage.getItem('userData'));

  return <>
  <GoogleAnalytics/>
  <Dashboard userName={`${capitalize(firstName)} ${capitalize(lastName)}`} />
  </>;
};

export default Profile;
