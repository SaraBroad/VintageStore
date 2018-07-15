import React, { Component } from "react";
// import data from "./products.json";
import Gallery from "../components/Gallery";
import GalleryItem from "../components/Gallery";
import {
  Route,
  Link
} from 'react-router-dom'
import API from "../utils/API";
import AddToCart from "../components/AddToCart/AddToCart";


class All extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    this.getProducts();
  }

    getProducts = () => {
      API.getProducts()
        .then(res => {
          
          // console.log(res.data);
          this.setState({
            products: res.data
            
          })
        }
        )
        .catch(err => console.log(err));
    };
  
    getProductById = id => {
      API.getProductById(id)
      
      .then(res => 
        console.log(res.data)
        // this.addToCart()
      )
      .catch(err => console.log(err));
  }

  render() {

    return (
      <div className="container">
        <div className="row text-center text-lg-left">
          {this.state.products.map(product => {
            return (
            <Gallery
              key={product.id}
              Image1={product.imageOne}
              Image2={product.imageTwo}
              Image3={product.ImageThree}
              productName={product.productName}
              productId={product.id}
              size={product.size}
              price={product.price}
              description={product.description}
            >
            {/* <AddToCart onClick={() => this.getProductById(product._id)} /> */}
            </Gallery>
          )
          })}
        </div>
      </div>
    );
  }
}
export default All;
