import {
  takeEvery,
  take,
  delay,
  takeLatest,
  put,
  call,
  all,
} from "redux-saga/effects";
import {
  fatchCollectionStart,
  fetchCollectionSuccess,
  fetchCollectionFailure,
} from "./shop.actions";
import { shopTypes } from "./shop.types";
import { db, convertArrayToMap } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export function* fetchCollectionAsync() {
  const collectionRef = yield collection(db, "collection");
  try {
    const response = yield getDocs(collectionRef);
    const items = yield call(convertArrayToMap, response.docs);
    yield put(fetchCollectionSuccess(items));
  } catch (err) {
    yield put(fetchCollectionFailure(err));
  }
}

export function* fetchCollectioStart() {
  yield takeLatest(shopTypes.FETCH_COLLECTION_START, fetchCollectionAsync);
}

export function* shopSagas() {
  yield all([call(fetchCollectioStart)]);
}
