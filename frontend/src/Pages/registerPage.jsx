import React, { Component } from "react";
import RegisterForm from "../Layouts/registerForm";
import axios from "axios"

const URL = "http://localhost:5001"

export default class LoginPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userLogin: "",
            password: "",
            name: "",
            lastName: "",
            email: "",
            celula: "",
        }
        this.change = this.change.bind(this);
        this.createUser = this.createUser.bind(this);
    }

    change = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    createUser() {
        axios.post(`${URL}/user/createUser`, this.state)
            .then(resp => {
                console.log(resp);
            })
        console.log(this.state);

    }

    render() {
        return (
            <div>
                <RegisterForm
                    userLogin={this.state.userLogin}
                    password={this.state.password}
                    name={this.state.name}
                    lastName={this.state.lastName}
                    email={this.email}
                    onChange={this.change}
                    action={this.createUser} />
            </div>
        )
    }
}
