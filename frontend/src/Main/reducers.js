import { combineReducers } from "redux";
import loginReducer from "../Reducers/loginReducers";
import registerReducer from "../Reducers/registerReducer";

const rootReducer = combineReducers({
  formLogin: loginReducer,
  formRegister: registerReducer,
});

export default rootReducer;
