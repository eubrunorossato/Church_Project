import React, { Component } from "react";
import Login from "../Pages/loginPage";
import RegisterPage from "../Pages/registerPage";
import Index from "../Pages/indexPage";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const Authentication = props => {
  if (localStorage.getItem("token") && localStorage.getItem("refreshToken")) {
    return props.children
  }
  return <Login />;
};

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <Authentication component={Authentication}>
          <Route exact path="/" component={Index} />
          <Route exact path="/register" component={RegisterPage} />
        </Authentication>
      </BrowserRouter>
    );
  }
}

export default Main;
