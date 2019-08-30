import React, { Component } from "react";
import axios from "axios";

class UserValue extends Component {

    constructor(props){
        super(props)

        this.state = { 
            userLogin: "",
        }
        this.UserValue = this.UserValue.bind(this)
    }

    UserValue(e) {
        return this.setState({ ...this.setState, userLogin: e.target.value})
    }
}

export default UserValue;