import React from 'react';

import Dashboard from '../../components/DashboardAll/Dashboard/Dashboard';

import { capitalize } from '../../util/capitalize';

const Profile = () => {
  const { firstName, lastName } = JSON.parse(localStorage.getItem('userData'));

  return <>
    <Dashboard userName={`${capitalize(firstName)} ${lastName && capitalize(lastName)}`} />
  </>;
};

export default Profile;
