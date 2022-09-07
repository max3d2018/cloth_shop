// WILL BE USED INSIDE COMPONENTS
import userTypes from "./userTypes";

export const setCurrentUser = (user) => {
  return {
    type: userTypes.SET_CURRENT_USER,
    payload: user,
  };
};

export const emailSignInStart = () => {
  return {
    type: userTypes.EMAIL_SIGN_IN_START,
  };
};

export const googleSignInStart = () => {
  return {
    type: userTypes.GOOGLE_SIGN_IN_START,
  };
};

export const signInSuccess = (user) => {
  return {
    type: userTypes.SIGN_IN_SUCCESS,
    payload: user,
  };
};

export const signInFailure = (err) => {
  return {
    type: userTypes.SIGN_IN_FAILURE,
    payload: err,
  };
};

export const checkUserSession = () => {
  return {
    type: userTypes.CHECK_USER_SESSION,
  };
};

export const signUpStart = (emailAndPasswordAndName) => {
  return { type: userTypes.SIGN_UP_START, payload: emailAndPasswordAndName };
};

export const signUpSUCCESS = (user) => {
  return { type: userTypes.SIGN_UP_SUCCESS, payload: user };
};

export const signUpFailure = (err) => {
  return { type: userTypes.SIGN_UP_START, payload: err };
};

export const signOutStart = () => ({ type: userTypes.SIGN_OUT_START });

export const signOutSuccess = () => ({ type: userTypes.SIGN_OUT_SUCCESS });

export const signOutFailure = (err) => ({
  type: userTypes.SIGN_OUT_FAILURE,
  payload: err,
});
