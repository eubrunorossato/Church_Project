import React from "react";
import "../Styles/loginStyle.css"
import Button from "./button";

export default props => (
    <div className="container">
        <div className="row">
            <div className="col-2">

            </div>
            <div className="col-8">
                <div className="jumbotron">
                    <div className="form-group">
                        <h5>Name</h5>
                        <input placeholder="Name"
                            id="name"
                            className="form-control"
                            value={props.name}
                            onChange={props.onChange}>
                        </input>

                        <h5>Last Name</h5>
                        <input placeholder="Last Name"
                            id="lastName"
                            className="form-control"
                            value={props.lastName}
                            onChange={props.onChange}></input>

                        <h5>User</h5>
                        <input placeholder="User"
                            id="userLogin"
                            className="form-control"
                            value={props.userLogin}
                            onChange={props.onChange}></input>

                        <h5>E-mail</h5>
                        <input placeholder="E-mail"
                            id="email"
                            className="form-control"
                            value={props.email}
                            onChange={props.onChange}></input>

                        <h5>password</h5>
                        <input placeholder="Password"
                            id="password"
                            className="form-control"
                            value={props.password}
                            onChange={props.onChange}></input>

                        <h5>Celula</h5>
                        <input placeholder="Celula"
                            id="celula"
                            className="form-control"
                            value={props.celula}
                            onChange={props.onChange}></input>
                        <Button name="Create" style="btn btn-primary" onClick={props.action} />
                    </div>
                </div>
            </div>
            <div className="col-2">

            </div>
        </div>
    </div>
)
