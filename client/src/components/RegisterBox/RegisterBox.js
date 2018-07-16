import React from 'react';
import {
    Link
  } from 'react-router-dom'
import "./RegisterBox.css";

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