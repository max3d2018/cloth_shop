import {
  takeLatest,
  put,
  all,
  call,
  takeLeading,
  take,
} from "redux-saga/effects";
import userTypes from "./userTypes";
import {
  signInFailure,
  signInSuccess,
  signUpSUCCESS,
  signUpFailure,
  signOutSuccess,
  signOutFailure,
} from "./userActions";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { signWithEmail } from "../../firebase/firebase";
import { getDoc } from "firebase/firestore";
import {
  auth,
  googleProvider,
  createProfileDoc,
  getCurrentUser,
} from "../../firebase/firebase";

export function* getSnapshot(user) {
  try {
    const userRef = yield call(createProfileDoc, user);
    const snapshot = yield getDoc(userRef);
    return snapshot.data();
  } catch (err) {
    console.log(err);
  }
}

export function* onGoogleSignIn() {
  try {
    const { user } = yield signInWithPopup(auth, googleProvider);
    const snapshot = yield getSnapshot(user);
    yield put(signInSuccess(snapshot));
  } catch (err) {
    yield put(signInFailure(err));
  }
}

export function* onEmailSignIn({ payload: { email, password } }) {
  try {
    const { user } = yield signInWithEmailAndPassword(auth, email, password);
    const snapshot = yield getSnapshot(user);
    yield put(signInSuccess(snapshot));
  } catch (err) {
    yield put(signInFailure(err));
  }
}

export function* onCheckSession() {
  try {
    const user = yield getCurrentUser();
    if (!user) return;
    const snapshot = yield getSnapshot(user);
    yield put(signInSuccess(snapshot));
  } catch (err) {
    yield put(signInFailure(err));
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield signWithEmail(auth, email, password, displayName);
    if (!user) return;
    const snapshot = yield getSnapshot(user);
    yield put(signUpSUCCESS(snapshot));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (err) {
    yield put(signOutFailure(err));
  }
}

export function* googleSignInAsync() {
  yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, onGoogleSignIn);
}

export function* emailSignInAsync() {
  yield takeLatest(userTypes.EMAIL_SIGN_IN_START, onEmailSignIn);
}

export function* checkUserSession() {
  yield takeLatest(userTypes.CHECK_USER_SESSION, onCheckSession);
}

export function* onSignUp() {
  yield takeLatest(userTypes.SIGN_UP_START, signUp);
}

export function* onSignOut() {
  yield takeLatest(userTypes.SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield all([
    call(googleSignInAsync),
    call(emailSignInAsync),
    call(onCheckSession),
    call(onSignUp),
    call(onSignOut),
  ]);
}
