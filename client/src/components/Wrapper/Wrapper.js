import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import "./Wrapper.css"


// ORIGINAL CODE
// const Wrapper = props => (
//     []
//   );


//this code renders home, cart, and likely any page that contains components
  const Wrapper = props => <main className="wrapper" {...props} />;
  export default Wrapper;