import React from 'react';

import { useQuery } from 'react-query';

const getPaymentsData = async (token) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_USERS_BACKEND_LINK}stripe/get_payments`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return err.message;
  }
};

const Dashboard = () => {
  const token = localStorage.getItem('token');

  const { data, status } = useQuery('payments', () => getPaymentsData(token));

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error :(</div>;
  }

  console.log(data, status);

  return (
    <div>
      {data.payments.data.length === 0 && <p>No data</p>}
      {data.payments.data.length > 0 && <div>{data.payments.data[0].id}</div>}
    </div>
  );
};

export default Dashboard;
