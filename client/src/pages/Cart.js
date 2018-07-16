import React, { Component } from 'react';
import CartCard from "../components/CartCard";
import CartCheckoutBar from "../components/CartCheckoutBar"

class Cart extends Component {
    render() {
        return (
        <div>
            <CartCard />
            <CartCheckoutBar />
        </div>
           
        )
    }
}

export default Cart;