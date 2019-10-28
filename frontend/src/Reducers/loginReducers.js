const InitialState = { userLogin: "", password: "" };

const loginReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "USERLOGIN_CHANGED":
      return { ...state, userLogin: action.payload };
    case "PASSWORD_CHANGED":
      return { ...state, password: action.payload };
    default:
      return state;

  }
}

export default loginReducer;
