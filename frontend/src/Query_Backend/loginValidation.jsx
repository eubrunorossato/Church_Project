import React from "react"
import axios from "axios";

const loginValidation = () => {
    axios.post("http://localhost:3000/authLogin", {
        userLogin: document.getElementById("userLogin"),
        password: document.getElementById("password"),
    })
    .then((resp) => {
        console.log(resp)
    })
    .catch((err) => {
        console.log(err);
    })
}

export default loginValidation;