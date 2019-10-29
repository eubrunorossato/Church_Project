import axios from "axios";

axios.defaults.baseURL = "http://localhost:5001/";

export const changeRegisterForm = (e) => ({
  type: "FORM_FIELD_CHANGED",
  payload: e.target.value,
  id: e.target.id
});

export const registerUser = (e, form) => {
  console.log(form);

  e.preventDefault();
  axios.post("/user/createUser", form)
    .then(resp => { console.log(resp) })
}
