import React from "react"
import Login from "../pages/loginPage"

const Auth = (props) => {
    if(localStorage.getItem("token") && localStorage.getItem("refreshToken")){
        return <div>{props.children}</div>
    } else {
        return <Login />
    }
}

export default Auth