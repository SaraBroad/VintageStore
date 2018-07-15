import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import SigninBox from "../components/SigninBox";
import RegisterBox from "../components/RegisterBox";
import API from "../utils/API";

//sign-in box
//register link

class Account extends Component {

    constructor(props) {
        super(props);
        this.state = {
        email: "",
        password: "",
        enterSignin: [],
        isLoggedIn: false
        };
        this.logInClick = this.logInClick.bind(this);
        this.logOutClick = this.logOutClick.bind(this);
    }

    handleUsername = (event) => {
        this.setState({ email: event.target.value })
    };

    handlePassword = (event) => {
        this.setState({ password: event.target.value })
    };

    getCustomerByEmail = email => {
   
        API.getCustomerByEmail(email)
        
        .then(res => 
          console.log(res.data)
        //   this.addToCartProduct({id : res.data.id})
        )
        .catch(err => console.log(err));
    }

    handleLogInSubmit = event => {

        console.log( "THIS IS RUNNING" );
         
        event.preventDefault();
        console.log(this.state);
        API.custLogin({
            email: this.state.email,
            password: this.state.password
        })
            .then(res => {
                console.log(res);
                this.setState({ enterSignin: res.data, isLoggedIn: true });
                this.props.setLoginState(true);      
                alert("You are signed in");
                console.log(this.props.email); 
                // this.getCustomerByEmail(this.props.email);
                // window.location.href = '/home'
            })
            .catch(err => console.log("error entering log-in data"))

            
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
            // <div>
            //     {/* <Account
            //         onClick={() => props.handleLogInSubmit}
            //     /> */}
                
            //     <Navbar>
            //     {button}
            //     </Navbar>
            // </div>

            <div className="account-container">
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
            </div>
        )
    }


}

export default Account;

// class Account extends Component {
//     state = {
//         email: "",
//         password: "",
//         enterSignin: [],
//         // isLoggedIn: false
//     };



//     handleUsername = (event) => {
//         this.setState({ email: event.target.value })
//     };

//     handlePassword = (event) => {
//         this.setState({ password: event.target.value })
//     };


//     handleLogInSubmit = event => {
//         event.preventDefault();
//         console.log(this.state);
//         API.custLogin({
//             email: this.state.email,
//             password: this.state.password
//         })
//             .then(res => {
//                 console.log(res);
//                 this.setState({ enterSignin: res.data, isLoggedIn: true });
//                 // this.setState({ isLoggedIn: true });
//                 alert("You are signed in");
//                 window.location.href = '/home'
//             })
//             .catch(err => console.log("error entering log-in data"))
//     }

//     render() {
//         return (
//             <div className="account-container">
//                 <div className="regbox-container">
//                     <div className="row">
//                         <div className="col-md-6">
//                             <SigninBox>
//                                 handleUsername={this.handleUsername}
//                                 handlePassword={this.handlePassword}
//                                 handleLogInSubmit={this.handleLogInSubmit}
//                             </SigninBox>

//                         </div>
//                         <div className="col-md-6">

//                             <RegisterBox />

//                         </div>
//                     </div>
//                 </div>

//             </div>
//         )
//     }
// }

// export default Account;