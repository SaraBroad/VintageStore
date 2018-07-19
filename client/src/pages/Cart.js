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
      CustomerId: null,
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
    this.getCustomerId();
  }

  // 

  getCustomerId = () => {
    API.getCartById(sessionStorage.getItem('cartId'))
      .then(res =>
        // console.log(res.data.id)
        this.setState({ CustomerId: res.data.CustomerId })
      )
      .catch(err => console.log(err));
  }

  getCartProducts = () => {
    API.getCartProductsByCartId(sessionStorage.getItem('cartId'))
      .then(res =>
        this.setState({
          cartProducts: res.data
        })
      )
      .catch(err => console.log(err));
  }

  getSubTotal = () => {
    API.calcSubTotalByCartId(sessionStorage.getItem('cartId'))
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

  handleCheckout = () => {
    alert("hello")
    let checkoutData = {
      CustomerId: this.state.CustomerId,
      ShippingCost: this.state.ShippingCost,
      SubtotalCost: this.state.SubtotalCost,
      TotalCost: this.state.TotalCost,
      PaymentDate: this.state.PaymentDate
    }
    API.postCheckout(checkoutData)
      .then(() => {
        alert("Thank you for your order")
        window.location.href = "/"
      })
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
          SubtotalCost={this.state.SubtotalCost.toFixed(2)}
          ShippingCost={this.state.ShippingCost}
          TotalCost={this.state.TotalCost.toFixed(2)}
          handleCheckout={this.handleCheckout.toFixed}
        />
      </div>

    )
  }
}

export default Cart;