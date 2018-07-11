import React from 'react';
import "./SigninBox.css";

const SigninBox = props => (
    <div className="signin-container">
        <form className="signin-form">
            <p className="sign-heading">Sign-in to your account here</p>
            <div className="form-group sign-group">
                {/* {props.username} */}
                <label htmlFor="email">Email address</label>
                <input type="email"
                    className="form-control sign-input"
                    required="required"
                    onChange={props.handleUsername}
                    id="email"
                    placeholder="Enter email"
                />
            </div>
            <div className="form-group sign-group">
            {/* {props.password} */}
                <label for="password">Password</label>
                <input type="password"
                    className="form-control sign-input"
                    required="required"
                    onChange={props.handlePassword}
                    id="password"
                    placeholder="Enter password"
                />
            </div>
            <button type="submit" class="submitsign-btn" onClick={props.handleLogInSubmit}>Submit</button>
        </form>
    </div>
)

export default SigninBox;
