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
import Checkout from "./pages/Checkout";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Wrapper from "./components/Wrapper";


// ORIGINAL CODE
// const App = () => (
//   <Router>
//     <div>
//       <Navbar>
//         <Route exact path="/about" component={About} />
//         <Route exact path="/blog" component={Blog} />
//         <Route exact path="/account" component={Account} />
//         <Route exact path="/cart" component={Cart} />
//         <Search />
//       </Navbar>
//       <Wrapper>
//         <Route exact path="/" component={Home} />
//         <Jumbotron />
//       </Wrapper>
//       <Footer >
//         <Route exact path="/contact" component={Contact} />
//         <Route exact path="/FAQs" component={FAQs} />
//       </Footer>
//     </div>
//   </Router>
// );

// export default App;


//this code renders home, cart, and likely any page that contains components
const App = () => (
  <Router>
    <div>
      
      <Navbar />
      <Wrapper>
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/" component={Home} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/FAQs" component={FAQs} />
        {/* Search is already in Navbar.css */}
        {/* <Search /> */}
        <Jumbotron />
      </Wrapper>
      
      <Footer >
        {/* <Route exact path="/contact" component={Contact} /> */}
        {/* <Route exact path="/FAQs" component={FAQs} /> */}
      </Footer>
    </div>
  </Router>
);

export default App;