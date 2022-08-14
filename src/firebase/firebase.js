import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  addDoc,
  setDoc,
  updateDoc,
  getDocs,
} from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";

let profileName = null;

const config = {
  apiKey: "AIzaSyAQ0M5kVbtnbYrwDzPyaq_vzX2tpCxQA0c",
  authDomain: "crwn-db-ff3e6.firebaseapp.com",
  projectId: "crwn-db-ff3e6",
  storageBucket: "crwn-db-ff3e6.appspot.com",
  messagingSenderId: "338143351389",
  appId: "1:338143351389:web:b9f31f79f456c48639f3b4",
  measurementId: "G-5E0HFTPJYX",
};

const app = initializeApp(config);

export const auth = getAuth();
// export const firestore = Firestore();

//  Sign in with Google

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider);
};

export const db = getFirestore(app);

export const signWithEmail = async (auth, email, password, name) => {
  if (name) profileName = name;
  await createUserWithEmailAndPassword(auth, email, password);
};

export const createProfileDoc = async (authUser) => {
  if (!authUser) return;

  // Is this user Exists in our data base?
  const usersRef = doc(db, "users", `${authUser.uid}`);

  try {
    const user = await getDoc(usersRef);
    if (!user.exists()) {
      let { displayName, email } = authUser;

      if (profileName) displayName = profileName;
      const createdAt = new Date();
      await setDoc(usersRef, {
        id: authUser.uid,
        displayName,
        email,
        createdAt,
      });
    }
  } catch (error) {
    console.error(error.message);
  }
  profileName = null;
  return usersRef;
};
