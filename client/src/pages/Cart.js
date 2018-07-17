import React, { Component } from 'react';
import {
    Route,
    Link
  } from 'react-router-dom'
import CartCard from "../components/CartCard";
import CartCheckoutBar from "../components/CartCheckoutBar"
import API from "../utils/API";


class Cart extends Component {
    state = {
        cartProducts: []
      };

    componentDidMount() {
        this.getCartProducts();     
      }

    getCartProducts = () => {
      API.getCartProducts().then( res => {
        //   var data = res.data.productId
        //   console.log(res.data[0].productId)
        //   Object.keys(res).map(function(keyName, keyIndex) {
        //     // use keyName to get current key's name
        //     // and a[keyName] to get its value
        //   }) 
         
          // this.getProductById(i)
    })
}

    getProductById = id => {
        API.getProductById(id).then( res => {
            console.log(res.data)
            // this.setState = {
            //     cartProducts: res.data[0].productId
            //   };
    })
    }


    render() {
        return (
        <div>
            {this.state.cartProducts.map(cartProduct => {
                return (
                    <CartCard 
                  key={cartProduct.id}
                  Image1={cartProduct.imageOne}
                  Image2={cartProduct.imageTwo}
                  Image3={cartProduct.ImageThree}
                  productName={cartProduct.productName}
                  productId={cartProduct.id}
                  size={cartProduct.size}
                  price={cartProduct.price}
                  description={cartProduct.description}
                >
                </CartCard>

                )
            })}
            <CartCheckoutBar />
        </div>
           
        )
    }
}

export default Cart;