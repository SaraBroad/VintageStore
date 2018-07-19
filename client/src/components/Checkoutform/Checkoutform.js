import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import "./Checkoutform.css";
import CheckoutCard from '../CheckoutCard';


class Checkoutform extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);;
  }

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let response = await fetch("/charge", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
    });
  
    if (response.ok) this.setState({complete: true});
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
  
    return (
      <div className="checkout">
        <CheckoutCard/>
          <div className="checkoutprice-container">
            <div className="checkout-bar">
              <h1 className="total-heading">Total</h1>
              <div className="sub-total">
                {/* // {props.subtotal} */}
                <p>Subtotal: </p>
                {/* // {props.shipping} */}
                <p>Shipping: </p>
                {/* // {props.tax} */}
                <p>Tax: </p>
              </div>
              <div>
               <p className="total">Total: {/* {props.total} */}</p>
              </div>
              <div className="payment-details">
              <b>Payment Details:</b> 
              <div className="card-details">                
                <CardElement />
              </div>
              <div className="payButton">
                <button onClick={this.submit}><b>Pay</b></button>
              </div> 
              <br/>
              </div>   
            </div>
          </div>
       </div> 
    );
}
}
export default injectStripe(Checkoutform);

