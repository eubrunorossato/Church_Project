import React from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5001/";

export const changeUserLogin = (e) => ({
  type: "USERLOGIN_CHANGED",
  payload: e.target.value,
});

export const changePassword = (e) => ({
  type: "PASSWORD_CHANGED",
  payload: e.target.value,
});

export const loginValidation = (e, loginForm) => {
  console.log(loginForm);

  e.preventDefault();
  axios.post("/authLogin", { loginForm })
    .then(resp => {
      if (resp.data.status) {
        window.location.replace("http://localhost:5002/");
      }
    })
};

