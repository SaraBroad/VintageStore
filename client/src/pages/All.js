import React, { Component } from "react";
// import data from "./products.json";
import Gallery from "../components/Gallery";
import GalleryItem from "../components/Gallery";
import {
  Route,
  Link
} from 'react-router-dom'
import API from "../utils/API";



// class All extends Component {
//   state = {
//     data : []
//   };

//   componentDidMount() {
//     API.getProducts().then(data => this.setState({ data }));
//   }

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
          
          console.log(res.data);
          this.setState({
            products: res.data
            
          })
        }
        )
        .catch(err => console.log(err));
    };
  
  

  render() {

    return (
      <div className="container">
        <div className="row text-center text-lg-left">
          {this.state.products.map((product, i) => (
            
            <Gallery
              key={i}
              Image1={product.imageOne}
              Image2={product.imageTwo}
              Image3={product.imageThree}
              productName={product.productName}
              id={product.id}
              size={product.size}
              price={product.price}
              description={product.description}
            />

          ))}
        </div>
      </div>
    );
  }
}
export default All;
