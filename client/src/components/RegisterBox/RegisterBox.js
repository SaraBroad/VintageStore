import React from 'react';
import {
    Link
  } from 'react-router-dom'
import "./RegisterBox.css";

const RegisterBox = props => (
    <div className="reg-container">
        <div className="reg-box">
            <p className="account-prompt"><b>Don't have an account?</b></p>
            <br/>
            <div className="register-link">
            <button className="regButton"><Link to="/register"> Register </Link></button>
            </div>
        </div>
    </div>
)

export default RegisterBox;