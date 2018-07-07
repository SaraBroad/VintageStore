import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

import STRIPE_PUBLISHABLE from '../../constants/stripe';
import PAYMENT_SERVER_URL from '../../constants/server';

const CURRENCY = 'USD';

const fromUSDToCent = amount => amount * 100;


const onToken = (amount, description) => token =>
  axios.post(`${PAYMENT_SERVER_URL}/charge`,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromUSDToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment);


const successPayment = data => {
  console.log(data);  
  alert('Payment Successful');
};

const errorPayment = data => {
  console.log(data);
  alert('Payment Error ');
};



const Checkout = ({ name, description, amount }) =>
  <StripeCheckout
    name={name}
    description={description}
    amount={fromUSDToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />

export default Checkout;

