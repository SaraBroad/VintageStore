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

handleSubmitForm = event => {
    event.preventDefault();
}
//handleSubmitForm

// handleFormSubmit = event => {
//     event.preventDefault();
//     API.getArticles(
//         this.state.title,
//         this.state.startYear,
//         this.state.endYear
//     )
//         .then(res => {
//             console.log(res);
//             this.setState({ articles: res.data.response.docs });
//         })
//         .catch(err => console.log(err));
// }

//WHERE SHOULD THIS BE REDIRECTED TO?

    render() {
        return (
            <div>
               <RegForm />
            </div>
        )
    }
}

export default RegisterPage;