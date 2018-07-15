import React from "react";
import "./Gallery.css";
import ControlledCarousel from "./../Carousel/Carousel";
import {
  Route,
  Link
} from 'react-router-dom'

{/* <img src={images['doggy.png']} /> */ }

const Gallery = props => (
// Slideshow container
  <div className="col-lg-3 col-md-4 col-xs-6" >
  
    <ControlledCarousel  
      Image1={props.Image1}
      Image2={props.Image2}
      Image3={props.Image3}/>
    <br/>
    <span>{props.name}</span>
    <br/>
    <span>Size: {props.size}</span>
    <br/>
    <span>Price: {props.price}</span>
    <p><Link to={"/item/" + props.id}>detail page</Link></p>
  </div>
  
);

export default Gallery;
