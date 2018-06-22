import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Helmet } from "react-helmet";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Cart from "./pages/Cart";
import FAQs from "./pages/FAQs";
import Search from "./components/Search";
import Account from "./pages/Account";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Wrapper from "./components/Wrapper";

const App = () => (
  <Router>
    <div>
      <Navbar>
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/cart" component={Cart} />
        <Search />
      </Navbar>
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Jumbotron />
      </Wrapper>
      <Footer >
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/FAQs" component={FAQs} />
      </Footer>
    </div>
  </Router>
);

export default App;
