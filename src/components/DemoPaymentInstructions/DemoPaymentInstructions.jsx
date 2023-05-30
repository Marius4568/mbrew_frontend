import React from 'react';
import * as S from './DemoPaymentInstructions.styles.js';

const DemoPaymentInstructions = () => {
  return (
    <S.Container>
      <S.Title>Demo Mode Instructions</S.Title>
      <S.Text>
        For testing purposes, please use the following <b>test card details </b>in the payment form:
      </S.Text>
      <S.List>
        <li><b>Card Number:</b> 4242 4242 4242 4242</li>
        <li><b>Expiry Date:</b> Any future date</li>
        <li><b>CVC:</b> Any 3 digits</li>
      </S.List>
      <S.Text>
         In addition, you can use <b>any valid address information</b> for the billing address.
      </S.Text>
      <S.Text>
        Please note that <b>no real transactions</b> will be processed using these details.
      </S.Text>
    </S.Container>
  );
};

export default DemoPaymentInstructions;