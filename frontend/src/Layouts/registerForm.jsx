import React, { Component } from "react";
import "../Styles/loginStyle.css"
import Button from "./button";
import { changeRegisterForm, registerUser } from "../ChangeActions/registerActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux"

class RegisterForm extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { name, lastName, userLogin, email, celula, password } = this.props;
        const form = { name, lastName, userLogin, email, celula, password };
        return (
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
                                    value={this.props.name}
                                    onChange={this.props.changeRegisterForm}>
                                </input>

                                <h5>Last Name</h5>
                                <input placeholder="Last Name"
                                    id="lastName"
                                    className="form-control"
                                    value={this.props.lastName}
                                    onChange={this.props.changeRegisterForm}></input>

                                <h5>User</h5>
                                <input placeholder="User"
                                    id="userLogin"
                                    className="form-control"
                                    value={this.props.userLogin}
                                    onChange={this.props.changeRegisterForm}></input>

                                <h5>E-mail</h5>
                                <input placeholder="E-mail"
                                    id="email"
                                    className="form-control"
                                    value={this.props.email}
                                    onChange={this.props.changeRegisterForm}></input>

                                <h5>password</h5>
                                <input placeholder="Password"
                                    id="password"
                                    className="form-control"
                                    value={this.props.password}
                                    onChange={this.props.changeRegisterForm}></input>

                                <h5>Celula</h5>
                                <input placeholder="Celula"
                                    id="celula"
                                    className="form-control"
                                    value={this.props.celula}
                                    onChange={this.props.changeRegisterForm}></input>
                                <Button name="Create" style="btn btn-primary" onClick={(e) => { registerUser(e, form) }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToPros = (state) => ({
    name: state.formRegister.name,
    lastName: state.formRegister.lastName,
    userLogin: state.formRegister.userLogin,
    email: state.formRegister.email,
    celula: state.formRegister.celula,
    password: state.formRegister.password,
});
const mapDispatchToProps = disptach => bindActionCreators({ changeRegisterForm, registerUser }, disptach);
export default connect(mapStateToPros, mapDispatchToProps)(RegisterForm);
