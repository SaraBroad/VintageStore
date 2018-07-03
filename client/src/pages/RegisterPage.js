import React, { Component } from 'react';
import RegForm from "../components/RegForm";
import API from "../utils/API"

//RegisterPage reroutes to cart


class RegisterPage extends Component {

    state = {
        name: "",
        addressOne: "",
        addressTwo: "",
        city: "",
        state: "",
        zip: "",
        phone: "",
        email: "",
        password: "",
        regInfo: []
    }

    // state = {
    //     regData: {
    //         name
    //     }
    // }

    //es6

    handleName = (event) => {
        this.setState({ name: event.target.value })
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

    handleFormSubmit = event => {
        event.preventDefault();
        API.saveCustomer(
            this.state.name,
            this.state.addressOne,
            this.state.addressTwo,
            this.state.city,
            this.state.state,
            this.state.zip,
            this.state.phone,
            this.state.email,
            this.state.password
        )
            .then(res => {
                console.log(res);
                alert("hello");
                this.setState({ regInfo: res.data })
            })
            .catch(err => console.log(err));
    }


    //WHERE SHOULD THIS BE REDIRECTED TO?

    render() {
        return (
            <div>
                <RegForm
                    handleName={this.handleName}
                    handleAddOne={this.handleAddOne}
                    handleAddTwo={this.handleAddTwo}
                    handleCity={this.handleCity}
                    handleState={this.handleState}
                    handleZip={this.handleZip}
                    handlePhone={this.handlePhone}
                    handleEmail={this.handleEmail}
                    handlePassword={this.handlePassword}
                    handleFormSubmit={this.handleFormSubmit}
                />
            </div>
        )
    }
}

export default RegisterPage;