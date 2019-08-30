import React from "react";
import "../styles/loginStyle.css"
import Button from "./button";
import loginValidation from "../Query_Backend/loginValidation";

export default props => (
    <div className="container">
        <div className="row">
            <div className="col-2">

            </div>
            <div className="col-8">
                <div className="jumbotron">
                    <div className="form-group">
                        <h5>User</h5>
                        <input placeholder="User" id="userLogin" className="form-control"></input>
                        <h5>Password</h5>
                        <input placeholder="Password" id="password" className="form-control"></input>
                        <Button name="Log in" style="btn btn-primary" onClick={ loginValidation()}/>
                    </div>
                </div>
            </div>
            <div className="col-2">

            </div>
        </div>
    </div>
)