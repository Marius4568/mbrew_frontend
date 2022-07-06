import React from 'react';
import PropTypes from 'prop-types';
import * as S from './SuccessSection.styles.js';

import Spinner from '../Loading/Spinner/Spinner';

import { useNavigate } from 'react-router-dom';

import { formatCurrency } from '../../util/formatCurrency';
import { formatStripeProperty } from '../../util/formatStripeProperty';

import Section from '../Section/Section';

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

const SuccessSection = ({ children }) => {
  const navigate = useNavigate();

  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  const sessionId = params.session_id;

  const { data, status } = useQuery('order', () => getOrderData(sessionId));

  if (status === 'loading') {
    return (
      <Section title="Success">
        <S.SuccessSection>
          <Spinner width="20vmin" height="20vmin" />
        </S.SuccessSection>
      </Section>
    );
  }

  if (status === 'error' || data.error) {
    return (
      <Section title="Success">
        <S.SuccessSection>
          <p>{data.error}</p>
        </S.SuccessSection>
      </Section>
    );
  }

  const { amount_total, amount_subtotal, total_details, customer_details } = data.order;

  return (
    <Section title="Success">
      <S.SuccessSection>
        <S.ThanksSection>
          <S.LeftSide>
            <S.ThanksMessage>
              Thanks for your order <span>{data.order.customer_details.name}!</span>
            </S.ThanksMessage>
            <S.BackButton className="back-btn" handleClick={() => navigate('/', { replace: true })}>
              Continue
            </S.BackButton>
          </S.LeftSide>
          <S.Video playsInline autoPlay muted loop>
            <source
              src="https://res.cloudinary.com/dtfi6ppij/video/upload/v1656936046/thumbs_up_osivlp.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </S.Video>
        </S.ThanksSection>
        <S.OrderDetailsSection>
          <h3>Order Info:</h3>
          <S.OrderDetails>
            <S.PaymentInfo>
              <p className="details-title">Total Cost: </p>

              <div className="details-wrap">
                <div>
                  <span>Items cost: </span>
                  <span>{formatCurrency(amount_subtotal / 100)}</span>
                </div>
                <div>
                  <span>Discount: </span>
                  <span>{formatCurrency(total_details.amount_discount / 100)}</span>
                </div>
                <div>
                  <span>Shipping: </span>
                  <span>{formatCurrency(total_details.amount_shipping / 100)}</span>
                </div>
                <div>
                  <span>Tax: </span>
                  <span>{formatCurrency(total_details.amount_tax / 100)}</span>
                </div>

                <div>
                  <span>Total: </span>
                  <span>{formatCurrency(amount_total / 100)}</span>
                </div>
              </div>
            </S.PaymentInfo>
            <S.CustomerInfo>
              <div className="details-wrap">
                <p className="details-title">Customer info: </p>
                <div>
                  <span>Email: </span>
                  <span>{customer_details.email}</span>
                </div>
                <div>
                  <span>Name: </span>
                  <span>{customer_details.name}</span>
                </div>

                <p className="details-title">Shipping address: </p>
              </div>
              <div className="details-wrap">
                {Object.entries(customer_details.address).map((detail) => {
                  return (
                    <div key={detail[0]}>
                      <span>{detail[1] && formatStripeProperty(detail[0]) + ': '}</span>
                      <span>{detail[1] && detail[1]}</span>
                    </div>
                  );
                })}
              </div>
            </S.CustomerInfo>
          </S.OrderDetails>
        </S.OrderDetailsSection>
      </S.SuccessSection>
    </Section>
  );
};

SuccessSection.propTypes = {
  children: PropTypes.node,
};

export default SuccessSection;
