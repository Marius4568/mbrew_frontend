import styled from 'styled-components';

import Button from '../Button/Button';

export const SuccessSection = styled.div`
  border-radius: 0.2rem;
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.05), 0 0.3rem 1rem 0 rgba(0, 0, 0, 0.05);
  padding: 2rem 2rem 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  min-width: 15rem;
  max-width: 70rem;

  @media (min-width: 500px) {
    width: 70vw;
  }

  @media (min-width: 1000px) {
    padding: 4rem 2rem;
  }
`;

export const ThanksSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-bottom: 4rem;
  box-shadow: 0 1rem 2rem -2rem rgba(0, 0, 0, 0.2);
  @media (min-width: 1000px) {
    flex-direction: row;
    padding-bottom: 2rem;
  }
`;

export const LeftSide = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  @media (min-width: 500px) {
  }
`;

export const ThanksMessage = styled.p`
  font-weight: 500;
  margin-bottom: 2rem;
  /* width: 90%; */
  text-align: center;
  font-size: 1rem;

  span {
    display: block;
    margin-top: 0.5rem;
    /* width: 90%; */
    font-weight: 700;
  }

  @media (min-width: 768px) {
    /* width: 50%; */
    font-size: 1.2rem;
  }

  @media (min-width: 1000px) {
    /* width: 50%; */
    font-size: 1.3rem;
  }
`;

export const BackButton = styled(Button)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  width: calc(100% - 8rem);
  @media (min-width: 1000px) {
    position: static;
    transform: translateX(0);
    width: 50%;
  }
`;

export const Video = styled.video`
  width: 70%;
  max-width: 40rem;
  border-radius: 0.2rem;
  margin-bottom: 2rem;
  pointer-events: none;

  @media (min-width: 1000px) {
    width: 50%;
  }
`;

export const OrderDetailsSection = styled.div`
  width: 100%;

  text-align: center;
  h3 {
    margin: 4rem 0;
    font-size: 1.8rem;
  }

  @media (min-width: 768px) {
    h3 {
      font-size: 2rem;
    }
  }

  @media (min-width: 1000px) {
    h3 {
      font-size: 2.1rem;
    }
  }
`;

export const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  .details-wrap {
    > div {
      margin-bottom: 1.5rem;
      width: 100%;
    }
    > div span:first-child {
      font-weight: 600;
    }
  }

  .details-title {
    font-size: 1.2rem;
    font-weight: 700;
    margin: 1.5rem 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;

    column-gap: 3rem;
  }

  @media (min-width: 1000px) {
  }
`;

export const PaymentInfo = styled.div`
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.05), 0 0.3rem 1rem 0 rgba(0, 0, 0, 0.05);
  width: 90%;
  border-radius: 0.2rem;
  max-width: 20rem;
  margin-bottom: 4rem;
  padding: 2rem 0;

  @media (min-width: 768px) {
    text-align: left;
    padding: 2rem;
    margin-bottom: 0;
  }

  @media (min-width: 1000px) {
  }
`;

export const CustomerInfo = styled.div`
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.05), 0 0.3rem 1rem 0 rgba(0, 0, 0, 0.05);
  width: 90%;
  border-radius: 0.2rem;
  max-width: 20rem;
  padding-bottom: 2rem;

  @media (min-width: 768px) {
    padding: 2rem;
    text-align: left;
  }

  @media (min-width: 1000px) {
  }
`;
