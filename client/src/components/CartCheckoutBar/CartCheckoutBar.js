import React from "react";
import {
    Link
} from 'react-router-dom'
import "./CartCheckoutBar.css";

const CartCheckoutBar = props => (
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
        <p className="total"><b>Total: </b></p>

        <div className="promo-bar">
            <p>Enter a promo code</p>
            <input className="promo-input" />
        </div>
        <Link to="/checkout" type="button" class="btn btn-outline-primary checkout-button">Checkout</Link>

    </div>
);

export default CartCheckoutBar;