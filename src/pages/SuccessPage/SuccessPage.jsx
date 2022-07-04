import React from 'react';

import { useQuery } from 'react-query';

const getOrderData = async (sessionId) => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_USERS_BACKEND_LINK}stripe/get_order_data?&session_id=${sessionId}`,
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return err.message;
  }
};

const SuccessPage = () => {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  const sessionId = params.session_id;

  const { data, status } = useQuery('order', () => getOrderData(sessionId));

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error' || data.error) {
    return <div>Error :(</div>;
  }

  return (
    <div>
      <h1>Success!</h1>
      <h2>Thanks for your order {data.order.customer_details.name}!</h2>
    </div>
  );
};

export default SuccessPage;
