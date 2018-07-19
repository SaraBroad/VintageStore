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
  constructor(props) {
    super(props)

    var payday = new Date();
    this.state = {
        cartProducts: [],
        TotalCost: 0.00,
        SubtotalCost: 0.00,
        ShippingCost: "10.00",
        PaymentDate: payday
      };
    }

    componentDidMount() {
        this.getCartProducts();  
        this.getSubTotal();   
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

getSubTotal = () => {
API.calcSubTotal()
.then(res => {
  // console.log(res);
  let subTotal = 0;
  for (var i = 0; i < res.data.length; i++) {
    subTotal += parseFloat(res.data[i].price)
    console.log("Price: " + res.data[i].price)
  };
 
  this.setState({
    SubtotalCost: subTotal, TotalCost: subTotal + parseFloat(this.state.ShippingCost)
  })
})
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
           SubtotalCost={this.state.SubtotalCost}
           ShippingCost={this.state.ShippingCost}
           TotalCost={this.state.TotalCost}
           />
            
        </div>
           
        )
    }
}

export default Cart;