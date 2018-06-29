import React, { Component } from 'react';
import SigninBox from "../components/SigninBox";
import RegisterBox from "../components/RegisterBox";

//sign-in box
//register link


class Account extends Component {
    render() {
        return (
            <div>
                <SigninBox />
                <RegisterBox />
            </div>
        )
    }
}