import React from "react";
import "./GalleryProduct.css";
import ControlledCarousel from "./../Carousel/Carousel";
import {
  Route,
  Link
} from 'react-router-dom'
import AddToCart from "../AddToCart";

{/* <img src={images['doggy.png']} /> */ }

const GalleryProduct = props => (
// Slideshow container
  <div className="col-lg-3 col-md-4 col-xs-6" >
  
    <ControlledCarousel  
      Image1={props.Image1}
      Image2={props.Image2}
      Image3={props.Image3}/>

    <span>Name: {props.productName}</span>
    <br/>
    <span>Size: {props.size}</span>
    <br/>
    <span>Price: ${props.price}</span>
    <br/>
    <AddToCart/>
    <br/>
    
  </div>
  
  
);

export default GalleryProduct;
