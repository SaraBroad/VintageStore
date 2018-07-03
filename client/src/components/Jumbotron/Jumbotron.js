import React from "react";
import {
  BrowserRouter 
} from 'react-router-dom'
import "./Jumbotron.css";
import ImageGW from "../ImageGW";

const Jumbotron = props => (
  <div className="jumbotron jumbotron-fluid">
  
      <ImageGW />
  
  </div>
);

export default Jumbotron;
