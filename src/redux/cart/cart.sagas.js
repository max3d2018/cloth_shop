import { takeLatest, call, all, put } from "redux-saga/effects";
import userTypes from "../user/userTypes";
import { clearCart } from "./cartActions";

export function* clearCartItems() {
  yield put(clearCart());
}

export function* clearCartOnSignOut() {
  yield takeLatest(userTypes.SIGN_OUT_START, clearCartItems);
}

export function* cartSagas() {
  yield all([call(clearCartOnSignOut)]);
}
