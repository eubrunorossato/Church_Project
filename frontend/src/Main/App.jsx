import React, { Component } from "react";
import Login from "../pages/loginPage"
import Authentication from "../Logic/Authentication";

import { BrowserRouter as Router, Route } from "react-router-dom"

class Main extends Component {
    render(){
        return(
            <Router>
                <Authentication>    
                    <Route exact path="/login" Component={Login}/>
                </Authentication>
            </Router>
        )
    }
}

export default Main