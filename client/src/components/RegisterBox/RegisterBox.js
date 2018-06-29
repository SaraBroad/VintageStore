import React from 'react';
import "./RegisterBox.css";

const RegisterBox = props => (
    <div className="reg-container">
        <div className="reg-box">
            <p className="account-prompt">Don't have an account?</p>
            <button type="submit" className="reg-submit">Register</button>
        </div>
    </div>
)

export default RegisterBox;