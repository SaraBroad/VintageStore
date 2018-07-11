import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Search from "../Search";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = () => (
  
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
               Account  
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
               Cart 
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
  
  export default Navbar;