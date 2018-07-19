import React from "react";
import { ListItem } from "../List";

const Product = ({ productName, description, size, price }) => (
  <ListItem>
    <div className="cart-card">
        
        <div className="item-container">
           
        <div className="item-list">
            
            <span>Item: {productName}</span>
            <br/>
            <span>Size: {size}</span>
            <br/>
            <span>Description: {description}</span>
            <br/>
            <span>Price: {price}</span>
            </div>
         
        </div>
    </div>
  </ListItem>
);

export default Product;