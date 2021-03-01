const initialValue = {
  username: "",
  password: "",
  loadingForm: false,
};

export const loginReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "LOAD_FORM":
      return {
        ...state,
        loadingForm: true,
      };
    default:
      return state;
  }
};
