import React, { Component } from 'react';
import RegForm from "../components/RegForm";
import Navbar from "../components/Navbar";
import API from "../utils/API"

//RegisterPage reroutes to cart


class RegisterPage extends Component {

    state = {
        firstName: "",
        lastName: "",
        addressOne: "",
        addressTwo: "",
        city: "",
        state: "",
        zip: "",
        phone: "",
        email: "",
        password: ""
    }

  



    handleFirstName = (event) => {
        this.setState({ firstName: event.target.value })
    };

    handleLastName = (event) => {
        this.setState({ lastName: event.target.value })
    };

    handleAddOne = (event) => {
        this.setState({ addressOne: event.target.value })
    };

    handleAddTwo = (event) => {
        this.setState({ addressTwo: event.target.value })
    };

    handleCity = (event) => {
        this.setState({ city: event.target.value })
    };

    handleState = (event) => {
        this.setState({ state: event.target.value })
    };

    handleZip = (event) => {
        this.setState({ zip: event.target.value })
    };

    handlePhone = (event) => {
        this.setState({ phone: event.target.value })
    };

    handleEmail = (event) => {
        this.setState({ email: event.target.value })
    };

    handlePassword = (event) => {
        this.setState({ password: event.target.value })
    };

    handleFormSubmit = id => {
        let newCustomer = {
            customerId: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            addressOne: this.state.addressOne,
            addressTwo: this.state.addressTwo,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            phone: this.state.phone,
            email: this.state.email,
            password: this.state.password
        }
        API.saveCustomer(newCustomer)
            .then(() => { 
                
                window.location.href = '/home'
            })
            .catch(err => {
                console.log(err);
                alert('customer not registered.')
            })
    }
    
    

    //WHERE SHOULD THIS BE REDIRECTED TO?

    render() {
        return (
            <div>
                <RegForm
                    handleFirstName={this.handleFirstName}
                    handleLastName={this.handleLastName}
                    handleAddOne={this.handleAddOne}
                    handleAddTwo={this.handleAddTwo}
                    handleCity={this.handleCity}
                    handleState={this.handleState}
                    handleZip={this.handleZip}
                    handlePhone={this.handlePhone}
                    handleEmail={this.handleEmail}
                    handlePassword={this.handlePassword}
                    // handleInputChange={this.handleInputChange}
                    // handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}

                />
            </div>
        )
    }
}

export default RegisterPage;