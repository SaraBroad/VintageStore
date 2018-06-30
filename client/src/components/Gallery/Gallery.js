import React from "react";
import "./Gallery.css";
import {
  Component,
  Route,
  Link
} from 'react-router-dom'


function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

{/* <img src={images['doggy.png']} /> */ }

const Gallery = props => (

  <div className="col-lg-3 col-md-4 col-xs-6" >
    {/* <img src={images[`${props.src}`]}/> */}
    <img className="img-fluid img-thumbnail" src={props.src} />
    <span>{props.name}</span>
    <span>Product Id: {props.id}</span>
    <span>Size: {props.size}</span>
    <span>{props.description}</span>
  </div>
);

export default Gallery;

