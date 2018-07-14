import React, { Component } from "react";
// import data from "./products.json";
import Gallery from "../components/Gallery";
import GalleryItem from "../components/Gallery";
import {
  Route,
  Link
} from 'react-router-dom'
import API from "../utils/API";


class All extends Component {
  state = {
    products: [],
    productName: "",
    price: "",
    size: "",
    description: "",
    inStock: "",
    Image1: "",
    Image2: "",
    Image3: "",
  };

  componentDidMount() {
    console.log('I was triggered during componentDidMount')
    this.getProducts();
  }

  

getProducts = () => {
    API.getProducts()
      .then(res =>
        
        this.setState({
          products: res.data,
          productName: "",
          price: "",
          size: "",
          description: "",
          inStock: "",
          Image1: "",
          Image2: "",
          Image3: ""
         
        })
      
      )
      .catch(err => console.log(err));
  };


  render() {
    console.log('I was triggered during render')
    return (
      <div className="container">
        <div className="row text-center text-lg-left">
        {this.state.products.length ? (
              <Gallery>
                {this.state.products.map(product => (

              <GalleryItem 
              Image1={product.ImageOne}
              Image2={product.ImageTwo}
              Image3={product.ImageThree}
              productName={product.productName}
              id={product.id}
              size={product.size}
              price={product.price}
              description={product.description}
                  />
                ))}
                </Gallery>
              ) : (
                <h3>No Results to Display</h3>
              )}
  

          
        </div>
      </div>
    );
  }
}

export default All;
