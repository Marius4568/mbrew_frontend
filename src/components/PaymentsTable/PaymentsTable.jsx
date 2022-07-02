import React from 'react';
import PropTypes from 'prop-types';
import * as S from './PaymentsTable.styles.js';

import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import Section from '../Section/Section';

import { useQuery } from 'react-query';

import { formatCurrency } from '../../util/formatCurrency';

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
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return err.message;
  }
};

const PaymentsTable = ({ children }) => {
  const token = localStorage.getItem('token');

  const { data, status } = useQuery('payments', () => getPaymentsData(token));

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error' || data.error) {
    return <div>{data.error ? data.error : 'An error has occured please try refreshing the page'}</div>;
  }

  //  console.log(data, status);

  return (
    <Section title="Payments">
      <S.PaymentsTableWrap>
        {data.payments.data && data.payments.data.length === 0 && <p>No data</p>}
        {data.payments.data && data.payments.data.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Order id</th>
                <th>Created at</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.payments.data.map((item) => (
                <tr key={item.id}>
                  <td data-label="Order id">{item.id}</td>
                  <td data-label="Created at">{new Date(item.created * 1000).toLocaleString()}</td>
                  <td data-label="Amount">{formatCurrency(item.amount / 100)}</td>
                  <td data-label="Status">
                    <div className="status-container">
                      {item.status === 'canceled' && <ErrorOutlineIcon className="error-icon"></ErrorOutlineIcon>}
                      {item.status === 'succeeded' && (
                        <CheckCircleOutlineIcon className="success-icon"></CheckCircleOutlineIcon>
                      )}
                      {item.status === 'processing' && <AccessTimeIcon className="processing-icon"></AccessTimeIcon>}
                      <span>{item.status}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {children}
      </S.PaymentsTableWrap>
    </Section>
  );
};

PaymentsTable.propTypes = {
  children: PropTypes.node,
};

export default PaymentsTable;