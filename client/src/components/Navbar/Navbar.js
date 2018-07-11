import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Search from "../Search";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
    <Link className="navbar-brand" to="/home">
      Madeleine
    </Link>
    <div>
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === "/all" ||
              window.location.pathname === "/all"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/all" className="nav-link">
            All Items
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
      </ul>
    </div>
    <div>
      <span>
        < Search />
      </span>
    </div>

  </nav>
);

export default Navbar;
