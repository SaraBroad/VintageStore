import React from "react";
import {Redirect} from "react-router";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Redirect } from 'react-router'
import "./App.css";
import { Helmet } from "react-helmet";
import All from "./pages/All";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Cart from "./pages/Cart";
import FAQs from "./pages/FAQs";
import Search from "./components/Search";
import Privacy from "./pages/Privacy"
import Account from "./pages/Account";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import Checkout from "./pages/Checkout";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Wrapper from "./components/Wrapper";
import Container from "./components/Container";
import Gallery from "./components/Gallery";



//this code renders home, cart, and likely any page that contains components
const App = () => (
  
<Router>

    <div className="app">
      <Navbar />
      <Container />
      <Wrapper>
        <Redirect from="/" to="/home" />
        <Route exact path="/all" component={All} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/FAQs" component={FAQs} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/privacy" component={Privacy} />
      </Wrapper>
     
      <Footer/>

    </div>
  </Router>
);

export default App;