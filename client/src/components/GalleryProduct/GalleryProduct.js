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
  <div className="product dritaContainer">
  <div className="col-lg-5 col-md-5 col-xs-6" >
    <br/>
    <ControlledCarousel  
      Image1={props.Image1}
      Image2={props.Image2}
      Image3={props.Image3}/>
    </div>
    
    <div className="col-lg-4 col-md-4 col-xs-6">
    <br/>
    <span><b> {props.productName}</b></span>
    <br/>
    <span>Size: {props.size}</span>
    <br/>
    <span>Price: ${props.price}</span>
    <br/>
    <span>{props.description}</span>
    <AddToCart/>
    <br/>
    </div>
  </div>
  
  
);

export default GalleryProduct;
