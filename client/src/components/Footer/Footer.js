import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";


const Footer = props => (
  <footer className="footer">
    <div className="footerFodder">
    <div className="Left">
    <li className={
            window.location.pathname === "/contact" ||
              window.location.pathname === "/contact"
              ? "footer-item active"
              : "footer-item"
          } 
          >
          <Link to="/contact" className="nav-link">
            Contact Us!
          </Link>
        </li>
        <li className={
            window.location.pathname === "/privacy" ||
              window.location.pathname === "/privacy"
              ? "footer-item active"
              : "footer-item"
          } 
          >
          <Link to="/privacy" className="nav-link">
             Privacy Policy
          </Link>
        </li>
        <li className={
            window.location.pathname === "/FAQs" ||
              window.location.pathname === "/FAQs"
              ? "footer-item active"
              : "footer-item"
          } 
          >
          <Link to="/FAQs" className="nav-link">
             FAQs
          </Link>
        </li>
    </div>

    <div className="right">
      <div id="social-test">
        <ul className="social">
          <li><a href="https://facebook.com/colorlib"><i className="fa fa-facebook" aria-hidden="true"/></a></li>
          <li><a href="https://twitter.com/colorlib"> <i className="fa fa-twitter" aria-hidden="true"/></a></li>
          <li><a href="https://instagram.com/colorlib"><i className="fa fa-instagram" aria-hidden="true"/></a></li>
        </ul>
        </div>
        <div className="copyright">
            <p className="footer-copyright">
                <strong> Vintage Store &copy; Copyright 2018</strong>
            </p>
        </div>
      </div>

    </div>
  </footer>
);

export default Footer;

