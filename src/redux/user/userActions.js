// WILL BE USED INSIDE COMPONENTS
import userTypes from "./userTypes";

export const setCurrentUser = (user) => {
  return {
    type: userTypes.SET_CURRENT_USER,
    payload: user,
  };
};
