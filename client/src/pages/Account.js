import React, { Component } from 'react';
import SigninBox from "../components/SigninBox";
import RegisterBox from "../components/RegisterBox";
import API from "../utils/API";
import "./Account.css";

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
                this.setState({ enterSignin: res.data });
                this.props.setLoginState(true);
                alert("You are signed in");
                this.getCustomerByEmail(this.state.email)
                window.location.href = '/'
            })
            .catch(err => console.log("error entering log-in data"))              
    }



    // addToCartProduct = productId => {
    //     API.addToCartProduct(productId)
    //       .then(res => {
    //         console.log(res.data)
    //         // this.setState({
    //         //   products: res.data
    //         // })
    //       }
    //       )
    //       .catch(err => console.log(err));
    //   };

    

    getCustomerByEmail = email => {
   
        API.getCustomerByEmail(this.state.email)
        
        .then(res => {
            console.log(res.data);
            sessionStorage.setItem('cartId', res.data.cartId);
        //   console.log("customer email res-data", res.data)
        //   this.addToCartProduct({id : res.data.id})
        })
        .catch(err => console.log(err));
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
            <div className="dritaContainer account-container">
                <div className="col-lg-5">  
                    <img className="girlsLaughing" alt="laughing" src="images/9.jpg" height="700px" width="relative" border="5px"/>
                </div>
            <div className="regbox-container"> 
                <div className="col-md-6 boxes">
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

// notes to use for later:


    // addToCartProduct = productId => {
    //     API.addToCartProduct(productId)
    //       .then(res => {
    //         console.log(res.data)
    //         // this.setState({
    //         //   products: res.data
    //         // })
    //       }
    //       )
    //       .catch(err => console.log(err));
    //   };

        //in render

            // <div>
            //     {/* <Account
            //         onClick={() => props.handleLogInSubmit}
            //     /> */}
                
            //     <Navbar>
            //     {button}
            //     </Navbar>
            // </div>