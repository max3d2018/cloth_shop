import userTypes from "./userTypes";

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: "",
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: "",
      };

    case userTypes.SIGN_UP_SUCCESS:
    case userTypes.SIGN_IN_SUCCESS: {
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: "",
      };
    }

    case userTypes.SIGN_UP_FAILURE:
    case userTypes.SIGN_IN_FAILURE: {
      return {
        ...state,
        errorMessage: action.payload.message,
      };
    }

    case userTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        errorMessage: null,
      };

    case userTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        errorMessage: action.payload.message,
      };

    default:
      return state;
  }
};

export default userReducer;
