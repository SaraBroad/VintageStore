import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../components/Checkoutform';


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
