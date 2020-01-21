export const initialState = {
  theme: false,
  form: false,
  siteLoading: true
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_FORM":
      console.log("nay");
      return { ...state, form: !state.form };
    case "LOADING":
      return { ...state, siteLoading: false };
    default:
      return state;
  }
};

export default appReducer;
