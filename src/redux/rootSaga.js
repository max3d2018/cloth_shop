import { shopSagas } from "./shop/shop.sagas";
import { userSagas } from "./user/user.sagas";
import { all, call } from "redux-saga/effects";
import { cartSagas } from "./cart/cart.sagas";

const rootSaga = function* () {
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
};

export default rootSaga;
