import React from 'react';
import imagegw from './DSC02629.jpg'; // Tell Webpack this JS file uses this image
import "./ImageGW.css";


function ImageGW() {
  // Import result is the URL of your image
  return <img className="imagegw" src={imagegw} alt="Girls walking" />;
}

export default ImageGW;