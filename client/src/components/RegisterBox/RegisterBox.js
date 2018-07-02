import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
import "./RegisterBox.css";
import { RegisterPage } from "react-router-dom";

const RegisterBox = props => (
    <div className="reg-container">
        <div className="reg-box">
            <p className="account-prompt">Don't have an account?</p>
            <div className="register-link">
            <Link to="/register">Register</Link>
            </div>
        </div>
    </div>
)

export default RegisterBox;