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
        TotalCost: "0.00",
        SubtotalCost: "0.00",
        ShippingCost: "5.00",
        PaymentDate: payday
      };
    this.getSubTotal=this.getSubTotal.bind(this);
    this.getTotalPrice=this.getTotalPrice.bind(this);
    }

    componentDidMount() {
        this.getCartProducts();  
        this.getTotalPrice();
        this.getSubTotal();   
      }
    
    componentWillUpdate() {
      this.getTotalPrice();
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

    getSubTotal = () =>
    API.calcTotalPrice()

    getTotalPrice = (customerId) =>
    API.calcSubTotal(customerId)

    handleCheckout = customerId => {
      let customerData = {
        TotalCost: this.props.TotalCost,
        SubtotalCost: this.props.SubtotalCost,
        ShippingCost: this.state.ShippingCost,
        PaymentDate: this.state.PaymentDate
      }
      // API.

    }


    // API.saveCustomer(newCustomer)
    // .then(() => {
    //     window.location.href = '/all'
    // })
    // .catch(err => {
    //     console.log(err);
    //     alert('customer not registered.')
    // })
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
           PaymentDate={this.state.PaymentDate}
           handleCheckout={this.handleCheckout}
           />
            
        </div>
           
        )
    }
}

export default Cart;