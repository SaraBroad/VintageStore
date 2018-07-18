import React, { Component } from "react";
import GalleryProduct from "../components/GalleryProduct";
import {
  Route,
  Link
} from 'react-router-dom'
import API from "../utils/API";


class ProductDetail extends Component {
  state = {
    product: [] 
  };

  componentDidMount() {
    //this.getProductsID();
    this.getProducts();
  }

    getProducts = () => {
        console.log(this.props);
      API.getProductsID(this.props.match.params.id)
        .then(res => {
          
          console.log(res.data);
          this.setState({
            product: res.data
            
          })
        }
        )
        .catch(err => console.log(err));
    };
  
  

  render() {
    const { product } = this.state;
    return (
      <div className="container">
        <div className="row text-center text-lg-left">
            {product ?
                <GalleryProduct
                Image1={product.imageOne}
                Image2={product.imageTwo}
                Image3={product.imageThree}
                productName={product.productName}
                productId={product.id}
                size={product.size}
                price={product.price}
                description={product.description}
                /> :
                <div>Loading...</div>
            }
        </div>
      </div>
    )
    }
}
export default ProductDetail;