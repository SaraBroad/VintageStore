import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../components/Checkoutform';
import STRIPE_PUBLISHABLE from '../constants/stripe';

class Checkout extends Component {


  

  render() {
    return (
      <StripeProvider apiKey={STRIPE_PUBLISHABLE}>
        <div className="example">
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default Checkout;
