import React, { Component } from "react";
import "../Styles/loginStyle.css"
import Button from "./button";
import { changePassword, changeUserLogin, loginValidation } from "../ChangeActions/loginActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class LoginForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { userLogin, password } = this.props
        return (
            <div className="container">
                <div className="row">
                    <div className="col-2">

                    </div>
                    <div className="col-8">
                        <div className="jumbotron">
                            <form>
                                <div className="form-group">
                                    <h5>User</h5>
                                    <input placeholder="Login"
                                        id="userLogin"
                                        className="form-control"
                                        value={this.props.userLogin}
                                        onChange={this.props.changeUserLogin}
                                    >
                                    </input>
                                    <h5>Password</h5>

                                    <input placeholder="Password"
                                        id="password"
                                        className="form-control"
                                        value={this.props.password}
                                        onChange={this.props.changePassword}
                                    ></input>
                                    <Button name="Log in"
                                        style="btn btn-primary"
                                        onClick={(e) => loginValidation(e, userLogin, password)}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-2">
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({ userLogin: state.form.userLogin, password: state.form.password });
const mapDispatachToProps = dispatch => bindActionCreators({ changeUserLogin, changePassword, loginValidation }, dispatch);
export default connect(mapStateToProps, mapDispatachToProps)(LoginForm);
