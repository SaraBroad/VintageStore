import React from "react";
import "./CartCheckoutBar.css";

const CartCheckoutBar  = props => (
<div className ="checkout-bar">
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

<div className="promo-bar">
<p>Enter a promo code</p>
<input className="promo-input" />
</div>
<button type="button" className="btn btn-primary">Checkout</button>
</div>
);

export default CartCheckoutBar;