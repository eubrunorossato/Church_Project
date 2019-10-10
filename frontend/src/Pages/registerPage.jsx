import React, { Component } from "react";
import RegisterForm from "../Layouts/registerForm";
import axios from "axios"

const URL = "http://localhost:5001/authLogin"

export default class LoginPage extends Component {

    constructor(props){
        super(props)

        this.state = { 
            userLogin: "",
            password: "",
            name: "",
            lastName: "",
            email: "",
        }
        this.change = this.change.bind(this);
    }

    change = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    render(){
        return(
            <div>
                <RegisterForm 
                userLogin={this.state.userLogin}
                password={this.state.password}
                name={this.state.name}
                lastName={this.state.lastName}
                email={this.email}
                onChange={this.change}/>
            </div>    
        )
    }
}
