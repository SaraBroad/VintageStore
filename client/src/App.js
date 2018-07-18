import React, { Component } from "react";
import { Redirect } from "react-router";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import "./App.css";
import { Helmet } from "react-helmet";
import All from "./pages/All";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Cart from "./pages/Cart";
import FAQs from "./pages/FAQs";
import Privacy from "./pages/Privacy"
import Account from "./pages/Account";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import Checkout from "./pages/Checkout";
import FooterPage from "./components/Footer";
import Contact from "./pages/Contact";
import Wrapper from "./components/Wrapper";
import Gallery from "./components/Gallery";
import GalleryProduct from "./components/GalleryProduct";
import AddToCart from "./components/AddToCart";
import API from "./utils/API";
import ProductDetail from './pages/productDetail';

import { Z_DEFAULT_STRATEGY } from "zlib";



//this code renders home, cart, and likely any page that contains components
class App extends Component {

  state = {
    isLoggedIn: false
  }

  componentDidMount() {
    // request to server to check if user is logged in.
    API.getSavedCust().then( res => {
      console.log( 'user is logged in?', res.data );
      this.setState({isLoggedIn: res.data});
    });
  } 

  setLoginState = ( value ) => {
    this.setState({isLoggedIn: value});
  }

  render() {
    return(
      <Router>

        <div className="app">
          <Navbar isLoggedIn={this.state.isLoggedIn} setLoginState={this.setLoginState} />
          {/* <Container /> */}
          <Wrapper>
            {/* <Redirect exact from="/" to="/home" /> */}
            <Route exact path="/all" component={All} />
            <Route exact path="/item/:id" component={ProductDetail} />
            <Route exact path="/about" component={About} />
            {/* <Route exact path="/blog" component={Blog} /> */}
            <Route exact path="/account" render={props => <Account setLoginState={this.setLoginState}  {...props} /> } />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/FAQs" component={FAQs} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/privacy" component={Privacy} />
          </Wrapper>

          <FooterPage />

        </div>
      </Router>
    );
  }
}

export default App;