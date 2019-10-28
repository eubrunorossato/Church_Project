import { combineReducers } from "redux";
import loginReducer from "../Reducers/loginReducers";
// const user = loginReducer.userLogin;

const rootReducer = combineReducers({
  form: loginReducer
});

export default rootReducer;
