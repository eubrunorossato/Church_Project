import React, { Component } from "react";
import Login from "../Layouts/loginForm";
import axios from "axios"

const URL = "http://localhost:5001/authLogin"

export default class LoginPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userLogin: "",
            password: "",
        }
        this.change = this.change.bind(this)
        this.loginValidation = this.loginValidation.bind(this)
    }

    change = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    loginValidation() {
        axios.post(URL, {
            userLogin: this.state.userLogin,
            password: this.state.password,
        })
            .then((resp) => console.log(resp))
    }

    render() {
        return (
            <div>
                <Login
                    userLogin={this.state.userLogin}
                    password={this.state.password}
                    changeUserLogin={this.change}
                    // loginValidation={this.loginValidation}
                    changePassword={this.change}
                />
            </div>
        )
    }
}
