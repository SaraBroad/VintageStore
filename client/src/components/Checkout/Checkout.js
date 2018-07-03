import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
 
export default class Checkout extends React.Component {
  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }
 
  // ...
 
  render() {
    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_wm10MtNVx4eZqsrHUpMXjw8i"
        name="Madeleine"
        zipCode={true}
        amount={1}
      />
    )
  }
}