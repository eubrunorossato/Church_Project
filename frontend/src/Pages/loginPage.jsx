import React, { Component } from "react";
import Login from "../layouts/loginForm";
import axios from "axios"

const URL = "http://localhost:3000/authLogin"

export default class LoginPage extends Component {

    constructor(props){
        super(props)

        this.state = { 
            userLogin: "",
            password: "", 
        }
        this.loginValidation = this.loginValidation.bind(this)
        this.UserValue = this.UserValue.bind(this)
        this.passwordValue = this.passwordValue.bind(this)
    }

    UserValue(e) {
        this.setState({ ...this.setState, userLogin: e.target.value})
    }

    passwordValue(e) {
        this.setState({ ...this.setState, password: e.target.value})
    }
    
    loginValidation() {
        axios.post(URL, {
            userLogin: this.state.userLogin,
            password: this.state.password,
        })
        .then( (resp) => console.log(resp))
    }

    render(){
        return(
            <div>
                <Login 
                userLogin={this.state.userLogin}
                password={this.state.password}
                onChangeLogin={this.UserValue}
                loginValidation={this.loginValidation}
                onChangePassword={this.passwordValue}/>
            </div>    
        )
    }
}
