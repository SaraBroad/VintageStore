import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
import SigninBox from "../components/SigninBox";
import RegisterBox from "../components/RegisterBox";

//sign-in box
//register link


class Account extends Component {
    render() {
        return (
            <div className="regbox-container">
                <div className="row">
                    <div className="col-md-6">
                        <SigninBox />
                    </div>
                    <div className="col-md-6">
                    <Link to="/register">
                        <RegisterBox />
                    </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Account;