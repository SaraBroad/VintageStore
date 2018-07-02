import React, { Component } from 'react';
import RegForm from "../components/RegForm";
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
    password: ""
}

//handleSubmitName
//handleSubmitaddressOne


//handleSubmitForm

    render() {
        return (
            <div>
               <RegForm />
            </div>
        )
    }
}

export default RegisterPage;