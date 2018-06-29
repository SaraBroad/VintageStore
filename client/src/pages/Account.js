import React, { Component } from 'react';
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
                        <RegisterBox />
                    </div>
                </div>
            </div>
        )
    }
}

export default Account;