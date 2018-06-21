import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Search from "../Search";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      Vintage Store
    </Link>
    <div>
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/about"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/" className="nav-link">
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
          < Search />
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
