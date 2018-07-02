import React, { Component } from 'react';
import SigninBox from "../components/SigninBox";
import RegisterBox from "../components/RegisterBox";
import API from "../utils/API";

//sign-in box
//register link


class Account extends Component {

    state = {
        username: "",
        password: "",
        enterSignin: []
    };

    //componentDidMount?

    handleUsername = (event) => {
        this.setState({ username: event.target.value })
    };

    handlePassword = (event) => {
        this.setState({ password: event.target.value })
    };


    handleLogInSubmit = event => {
        event.preventDefault();
        API.custLogin(
            this.state.username,
            this.state.password
        )
            .then(res => {
                console.log(res);
                this.setState({ enterSignin: res.data });
            })
            .catch(err => console.log("error entering log-in data"))
    }

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

    // $.ajax("/api/signin", {
//     type: "POST",
//     data: signin
// }).then(
//     function (response) {
//         window.location.href = response.redirectTo;
//     },
//     function(error) {
//         $this.find('.message:first').text('Username and/or password incorrect');
//     }
// );

    render() {
        return (
            <div className="regbox-container">
                <div className="row">
                    <div className="col-md-6">
                        <SigninBox 
                        handleUsername={this.handleUsername}
                        handlePassword={this.handlePassword} 
                        handleLoginSubmit={this.handleLoginSubmit}
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