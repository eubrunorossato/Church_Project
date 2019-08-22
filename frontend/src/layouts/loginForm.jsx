import React from "react";
import "../styles/loginStyle.css"
import Button from "./button";

export default props => (
    <div className="container">
        <div className="row">
            <div className="col-2">

            </div>
            <div className="col-8">
                <div className="jumbotron">
                    <div className="form-group">
                        <h5>User</h5>
                        <input placeholder="User" className="form-control"></input>
                        <h5>Password</h5>
                        <input placeholder="Password" className="form-control"></input>
                        <Button name="Submit" style="btn btn-primary"/>
                    </div>
                </div>
            </div>
            <div className="col-2">

            </div>
        </div>
    </div>
)