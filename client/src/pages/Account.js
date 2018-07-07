import React, { Component } from 'react';
import SigninBox from "../components/SigninBox";
import RegisterBox from "../components/RegisterBox";
import API from "../utils/API";

//sign-in box
//register link


class Account extends Component {

    state = {
        email: "",
        password: "",
        enterSignin: []
    };

    //componentDidMount?

    handleUsername = (event) => {
        this.setState({ email: event.target.value })
    };

    handlePassword = (event) => {
        this.setState({ password: event.target.value })
    };


    handleLogInSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        API.custLogin({
            email: this.state.email,
            password: this.state.password
        })
            .then(res => {
                console.log(res);
                this.setState({ enterSignin: res.data });
                alert("You are signed in");
            })
            .catch(err => console.log("error entering log-in data"))
    }

    render() {
        return (
            <div className="regbox-container">
                <div className="row">
                    <div className="col-md-6">
                        <SigninBox 
                        handleUsername={this.handleUsername}
                        handlePassword={this.handlePassword} 
                        handleLogInSubmit={this.handleLogInSubmit}
                        />

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