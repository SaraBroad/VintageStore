import React from "react";
import "./CheckoutPriceBar.css";
import Checkout from '../Checkout';

const CheckoutPriceBar = props => (
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
        <div className="stripe">
        <Checkout
            name={'Madeleine'}
            description={'Click "Pay" to charge your credit card'}
            amount={1}
          />
        </div> 
    </div>

    <div className="checkout-image">
    {/* //checkout image #9 goes here */}
    </div>
</div>

);

export default CheckoutPriceBar;