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
    products: []
  };

  componentDidMount() {
    this.getProducts();
  }

    getProducts = () => {
      API.getProducts()
        .then(res => {
          
          console.log(res.data);
          // this.setState({
          //   products: res.data
            
          // })
        }
        )
        .catch(err => console.log(err));
    };
  
  

  render() {

    return (
      <div className="container">
        <div className="row text-center text-lg-left">
          {this.state.products.map(item => (
            
            <Gallery
              
              Image1={item.Image1}
              Image2={item.Image2}
              Image3={item.Image3}
              name={item.Name}
              id={item.id}
              size={item.Size}
              price={item.Price}
              description={item.Description}
            />

          ))}
        </div>
      </div>
    );
  }
}
export default All;
