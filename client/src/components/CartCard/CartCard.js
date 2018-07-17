import React from "react";
import "./CartCard.css";

const CartCard = props => (
    <div className="cart-card">
        <h1 className="items">Your Items</h1>

        <div className="item-container">
           
        <div className="item-list">
            
            <span>Item: {props.productName}</span>
           
            <span>Size: {props.size}</span>
           
            <span>Description: {props.description}</span>
            
            <span>Price: {props.price}</span>
            </div>
         
        </div>
    </div>


);

export default CartCard;