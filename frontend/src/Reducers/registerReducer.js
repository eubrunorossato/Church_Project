const initialSate = { name: "", lastName: "", userLogin: "", email: "", celula: "", password: "" }

const registerReducer = (state = initialSate, action) => {
  const id = action.id;

  switch (action.type) {
    case "FORM_FIELD_CHANGED":
      return { ...state, [id]: action.payload }
    default:
      return state
  }
}

export default registerReducer;
