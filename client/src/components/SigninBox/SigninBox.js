import React from 'react';
import "./SigninBox.css";

const SigninBox = props => (
    <div className="signin-container">
        <div className="row">
            <div className="col-md-4">
                <form className="signin-form">
                    <p className="sign-heading">Sign-in to your account here</p>
                    <div className="form-group sign-group">
                        <label for="email">Email address</label>
                        <input type="email"
                            className="form-control sign-input"
                            id="email"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="form-group sign-group">
                        <label for="password">Password</label>
                        <input type="password"
                            className="form-control sign-input"
                            id="password"
                            placeholder="Enter password"
                        />
                    </div>
                    <button type="submit" class="submitsign-btn">Submit</button>
                </form>
            </div>
        </div>

    </div>
)

export default SigninBox;
