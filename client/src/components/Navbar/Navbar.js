import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Log from "../Log";
import Search from "../Search";
import API from '../../utils/API';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
class Navbar extends Component {

  logoutUser = () => {
    API.logOut().then( res => {
      console.log( 'user is logged in?', res.data );
      this.props.setLoginState( false );
    });
  }

  render() {
    return(
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <Link className="navbar-brand" to="/home">
        Z A N A vintage
      </Link>
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
  
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto Links">
          <li
            className={
              window.location.pathname === "/all" ||
                window.location.pathname === "/all"
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link to="/all" className="nav-link">
              Shop All Items  
            </Link>
          </li>
          <li
            className={
              window.location.pathname === "/about" ||
                window.location.pathname === "/about"
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link to="/about" className="nav-link">
                About  
            </Link>
          </li>
          <li
            className={
              window.location.pathname === "/blog"
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link to="/blog" className="nav-link">
               Blog  
            </Link>
          </li>
          <li
            className={
              window.location.pathname === "/account" 
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link to="/account" className="nav-link">
               {/* Login/Register  */}
               <div>
               {
                this.props.isLoggedIn === false
                ? <Link to="/account" className="nav-link"><button>Log-in</button></Link>
                : <button onClick={this.logoutUser}>Log-out</button>
               }
                {this.props.chidren}
               </div>
            </Link>
          </li>
          <li
            className={
              window.location.pathname === "/cart"
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link to="/cart" className="nav-link">
            <i class="fas fa-shopping-cart"></i>
            </Link>
          </li>
          <li>
              <div>
              <span>
                   < Search />
              </span>
              </div>
          </li>
        </ul>
        </div>
    </nav>
    );
  }
} 
  
  export default Navbar;
