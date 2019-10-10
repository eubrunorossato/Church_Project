import React, { Component } from "react";
import Login from "../Pages/loginPage";
import RegisterPage from "../Pages/registerPage";
import Authentication from "../Logic/Authentication";

import { BrowserRouter as Router, Route } from "react-router-dom"

class Main extends Component {
    render(){
        return(
            <Router>

                <Authentication>    
                    <Route exact path="/register" component={RegisterPage}/>
                </Authentication>
            </Router>
        )
    }
}

export default Main