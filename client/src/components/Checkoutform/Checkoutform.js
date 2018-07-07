import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import "./Checkoutform.css";


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
        {/* {props.total} */}
        <p className="total">Total: </p>
       
        <CardElement />
        <button onClick={this.submit}>Send</button>
      
      </div> 
    </div>
    </div>
    );
}
}
export default injectStripe(Checkoutform);

