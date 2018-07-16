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

  // createCart = () => {
  //   API.createCart()
  //     .then(res => {
        
  //       this.setState({
         
  //       })
  //     }
  //     )
  //     .catch(err => console.log(err));
  // };

  // componentDidMount() {
  //   // request to server to check if user is logged in.
  //   API.getSavedCust().then( res => {
  //     console.log( 'user is logged in?', res.data );
  //     this.setState({isLoggedIn: res.data});
  //   });
  // } 
  
  // checkLogin = () => {
  //   if (this.state.isLoggedIn) {
  //     return (window.location.href = "/account")
  //   } else {
  //     return (window.location.href = "/cart")
  //   }
  //  }
  

  getProductById = id => {
   
    API.getProductById(id)
    
    .then(res => 
      // console.log(res.data.id)
      this.addToCartProduct({id : res.data.id})
    )
    .catch(err => console.log(err));
}

    // this.addToCart();
  

//   componentDidMount() {
//     this.getSavedArticles();
//   }

// getProductById = () => {
//   API.getProductById()
//     .then(res => {
//       console.log(res)
//       // this.setState({
//       //   productId: res.data.productId
//       // })
//     }
//     )
//     .catch(err => console.log(err));
// };

  addToCartProduct = productId => {
    API.addToCartProduct(productId)
      .then(res => {
        console.log(res)
        // this.setState({
        //   products: res.data
        // })
      }
      )
      .catch(err => console.log(err));
  };

  // handleAddToCart = id => {
  //   API.addToCart(id).then(res => this.addToCart());
  // };


  


  render() {
    return (
        <div>
            <button
            className="addbutton"
            role="button"
            aria-label="click item"
            onClick={() => this.getProductById(this.props.productId)}
            >Add to Cart</button>
        </div>   
    );
  }
}

export default AddToCart;