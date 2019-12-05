import React from 'react';
import NavBar from "../components/navBar/navBar";
import M from "materialize-css";
import MemberList from "../components/memberList/memberList"
import "materialize-css/dist/css/materialize.min.css";
import 'material-design-icons/iconfont/material-icons.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/memberList" component={MemberList} />
    </Switch>
  </BrowserRouter>
)



export default App;
