import React, { Component } from "react";
import API from "../../utils/API";
import "./AddToCart.css";


class AddToCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: "",
      customerId: "",
      isLoggedIn: false
    };
  }

  componentDidMount() {
    // request to server to check if user is logged in.
    API.getSavedCust().then( res => {
      console.log( 'user is logged in?', res.data );
      this.setState({isLoggedIn: res.data});
    });
  }
  
  checkLogin = () => {
    if (this.state.isLoggedIn) {
      return (window.location.href = "/account")
    } else {
      return (window.location.href = "/cart")
    }
   }

   getCartById = id => {
   
        API.getCartById(id)
        
        .then(res => 
          // console.log(res.data.id)
          this.addToCartProduct({CartId : res.data.id})
        )
        .catch(err => console.log(err));
    }
 
//   getProductById = id => {
   
//     API.getProductById(id)
    
//     .then(res => 
//       // console.log(res.data.id)
//       this.addToCartProduct(res.data.id)
//     )
//     .catch(err => console.log(err));
// }

 

  addToCartProduct = productId => {
    API.addToCartProduct(productId)
      .then(res => {
        // console.log(res.data)
        // this.setState({
        //   products: res.data
        // })
      }
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
<<<<<<< HEAD
            onClick={this.handleAddToCart}
=======
            onClick={() => this.addToCartProduct(this.props.productId)}
>>>>>>> 8c9a269e75dbade15d8513e412d6bb9ac1b38dc1
            >Add to Cart</button>
        </div>   
    );
  }
}

export default AddToCart;