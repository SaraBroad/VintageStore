import React, { Component } from 'react';
import {
    Route,
    Link
  } from 'react-router-dom'
import CartCheckoutBar from "../components/CartCheckoutBar"
import API from "../utils/API";
import { List } from "../components/List";
import Product from "../components/Product";


class Cart extends Component {
    state = {
        cartProducts: [],
        total: "0.00",
        subtotal: "",
        shipping: "5.00",
      };

    componentDidMount() {
        this.getCartProducts();     
      }

    getCartProducts = () => {
      API.getCartProducts()
      .then( res => 
        this.setState({
            cartProducts: res.data
            
          })
    )
    .catch(err => console.log(err));
}


    render() {
        return (
        <div className="container">
           
            {this.state.cartProducts.length ? (
                <List>
                {this.state.cartProducts.map(cartProduct => (
                   <Product
                
                  key={cartProduct.id}
                  Image1={cartProduct.imageOne}
                  Image2={cartProduct.imageTwo}
                  Image3={cartProduct.ImageThree}
                  productName={cartProduct.productName}
                  productId={cartProduct.id}
                  size={cartProduct.size}
                  price={cartProduct.price}
                  description={cartProduct.description}
                />
                 ))}
                </List>
              ) : (
                <h2 className="text-center">No Items in Cart</h2>
              )}
               
           <CartCheckoutBar
           
           />
            
        </div>
           
        )
    }
}

export default Cart;