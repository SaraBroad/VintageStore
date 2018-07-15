import React, { Component } from "react";
import API from "../../utils/API";
import "./AddToCart.css";


class AddToCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: ""
    };
  }

  getProductById = id => {
    API.getProductById(id)
    
    .then(res => 
      console.log(res.data)
      // this.addToCart()
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

  addToCart = () => {
    API.addToCart()
      .then(res => {
        console.log(res)
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
            onClick={() => this.getProductById(this.props.productId)}
            >Add to Cart</button>
        </div>   
    );
  }
}

export default AddToCart;
