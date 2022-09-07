import { shopTypes } from "./shop.types";

export const fatchCollectionStart = () => {
  return { type: shopTypes.FETCH_COLLECTION_START };
};

export const fetchCollectionSuccess = (collection) => {
  return { type: shopTypes.FETCH_COLLECTION_SUCCESS, payload: collection };
};

export const fetchCollectionFailure = (err) => {
  return { type: shopTypes.FETCH_COLLECTION_FAILURE, payload: err.message };
};
