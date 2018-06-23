import React from "react";
import "./CartCard.css";

const CartCard = props => (
    <div className="cart-card">
        <h1 className="items">Your Items</h1>

        <div className="item-container">
            {/* <div className="img-container">
        <img alt="{props.imagename"} src={props.image} />
        </div> */}
        <div className="item-list">
            {/* {prop.item} */}
            <p>Item</p>
            {/* {prop.size} */}
            <p>Size</p>
            {/* {prop.description} */}
            <p>Description</p>
            {/* {prop.price} */}
            <p>Price</p>
            </div>
         
        </div>
    </div>


);

export default CartCard;