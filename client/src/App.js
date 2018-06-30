import React from "react";
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
import Search from "./components/Search";
import Account from "./pages/Account";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Wrapper from "./components/Wrapper";
import Container from "./components/Container";
import Gallery from "./components/Gallery";


//this code renders home, cart, and likely any page that contains components
const App = () => (
  <Router path="/home">
    <div className="app">
      <Navbar />
      <Container />
      <Wrapper>
        <Route exact path="/All" component={All} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/FAQs" component={FAQs} />
      </Wrapper>   
      <Footer >
        {/* <Route exact path="/contact" component={Contact} /> */}
        {/* <Route exact path="/FAQs" component={FAQs} /> */}
      </Footer>
    </div>
  </Router>
);

export default App;