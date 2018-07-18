import React from "react";
import {
    Link
} from 'react-router-dom'
import "./CartCheckoutBar.css";

const CartCheckoutBar = props => (
    <div className="checkout-bar">
        <h1 className="total-heading">Total</h1>
        <div className="sub-total">
            <p>Subtotal: {props.subTotal} </p>
            <p>Shipping: {props.shippingCost} </p>
        </div>
        <p className="total">Total: {props.TotalCost} </p>

        <div className="promo-bar">
            <p>Enter a promo code</p>
            <input className="promo-input" />
        </div>
        <Link to="/checkout" type="button" class="btn btn-outline-primary checkout-button">Checkout</Link>

    </div>
);

export default CartCheckoutBar;