import React, { Component } from "react";
import Account from "../../pages/Account";
import Navbar from "../Navbar";
import API from "../../utils/API"

class Log extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
        this.logInClick = this.logInClick.bind(this);
        this.logOutClick = this.logOutClick.bind(this);
    }

    logInButton = props => {
        return (
            <button onClick={props.onClick}>
            Login
          </button>
        )
    }

    logOutButton = props => {
        return (
            <button onClick={props.onClick}>
            Logout
            </button>
        )
    }

    logInClick = () => {
       this.setState({ isLoggedIn: false })
    }

    // API?
    logOutClick = () => {
        this.setState({ isLoggedIn: true })
    }

    render() {

        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <logOutButton onClick={this.logOutClick} />
        } else {
            button = <logInButton onClick={this.logInClick} />
        }
        return (
            <div>
                {/* <Account
                    onClick={() => props.handleLogInSubmit}
                /> */}
                
                <Navbar>
                {button}
                </Navbar>
            </div>
        )
    }
}


export default Log;