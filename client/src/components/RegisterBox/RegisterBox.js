import React from 'react';
import "./RegisterBox.css";
import { RegisterPage } from "react-router-dom";

const RegisterBox = props => (
    <div className="reg-container">
        <div className="reg-box">
            <p className="account-prompt">Don't have an account?</p>
            {/* <button type="submit" className="reg-submit">Register</button> */}
            <a href="/register" className="reg-link">Register</a>
        </div>
    </div>
)

export default RegisterBox;