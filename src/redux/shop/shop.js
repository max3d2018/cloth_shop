import { shopTypes } from "./shop.types";

const INITIAL_STATE = {
  isFetching: false,
  shopData: null,
  errorMessage: "",
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopTypes.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true,
      };
    case shopTypes.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        shopData: action.payload,
      };

    case shopTypes.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
