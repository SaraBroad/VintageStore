import React from "react";
import {
    Link
} from 'react-router-dom'
import "./CartCheckoutBar.css";

const CartCheckoutBar = props => (
    <div className="checkout-bar">
        <h1 className="total-heading">Total</h1>
        <div className="sub-total">
            <p>Subtotal: {props.SubtotalCost} </p>
            <p>Shipping: {props.ShippingCost} </p>
        </div>
        <p className="total">Total: {props.TotalCost} </p>

        <div className="promo-bar">
            <p>Enter a promo code</p>
            <input className="promo-input" />
        </div>
        <button type="submit" class="btn btn-outline-primary checkout-button"  onClick={props.handleCheckout}>Checkout</button>
    </div>
);

export default CartCheckoutBar;