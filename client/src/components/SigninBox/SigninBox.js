import React from 'react';
import "./SigninBox.css";

const SigninBox = props => (
    <div className="signin-container" onSubmit={props.handleLogInSubmit}>
        <form className="signin-form">
        <br/>
            <p className="sign-heading">Sign-in to your account here</p>
            <br/>
            <div className="form-group sign-group">
                {/* {props.username} */}
                <label htmlFor="email">Email address</label>
                <br/>
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
            <button type="submit" className="submitsign-btn" onClick={props.handleLogInSubmit}>Submit</button>
        </form>
    </div>
)

export default SigninBox;
