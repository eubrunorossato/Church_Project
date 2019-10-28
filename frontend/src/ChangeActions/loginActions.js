import axios from "axios";

axios.defaults.url = "http://localhost:5001/"

export const changeUserLogin = (e) => ({
  type: "USERLOGIN_CHANGED",
  payload: e.target.value,
});

export const changePassword = (e) => ({
  type: "PASSWORD_CHANGED",
  payload: e.target.value,
});

export const loginValidation = (e, userLogin, password) => {
  e.preventDefault();
  console.log({ userLogin, password });
};
