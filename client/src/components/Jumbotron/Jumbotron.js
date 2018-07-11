import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import "./Jumbotron.css";
import ImageGW from "../ImageGW";

const Jumbotron = props => (
  <div className="jumbotron jumbotron-fluid">
     <Link to="/all" className="jumbotron-link">
     <ImageGW />  
      </Link> 
  </div>
);

export default Jumbotron;
