import React, { Component } from 'react';
import CheckoutCard from "../components/CheckoutCard";
import CheckoutPriceBar from "../components/CheckoutPriceBar";

class Checkout extends Component {
    render () {
        return (
            <div>
            <CheckoutCard />
            <CheckoutPriceBar />
            </div>
        )
    }
}

export default Checkout;