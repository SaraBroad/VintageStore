import React, { Component } from "react";
import API from "../../utils/API";
import "./AddToCart.css";


class AddToCart extends Component {
  state = {
    products: []
  };

//   componentDidMount() {
//     this.getSavedArticles();
//   }

  addToCart = () => {
    API.addToCart()
      .then(res =>
        this.setState({
          products: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleAddToCart = id => {
    API.addToCart(id).then(res => this.addToCart());
  };

  render() {
    return (
        <div>
            <button
            className="addbutton"
            role="button"
            aria-label="click item"
            onClick={this.handleAddToCart}
            >Add to Cart</button>
        </div>   
    );
  }
}

export default AddToCart;
