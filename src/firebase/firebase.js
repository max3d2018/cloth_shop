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
  writeBatch,
} from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
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

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
  signInWithPopup(auth, googleProvider);
};

export const db = getFirestore(app);

export const signWithEmail = async (auth, email, password, name) => {
  if (name) profileName = name;
  const result = await createUserWithEmailAndPassword(auth, email, password);
  return result;
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

export const addDataToCollection = async (collectionName, objectsToAdd) => {
  const colllectionRef = collection(db, collectionName);

  const batch = writeBatch(db);

  objectsToAdd.forEach((obj) => {
    console.log(obj);
    const newDocumentRef = doc(colllectionRef);

    batch.set(newDocumentRef, obj);
  });

  return await batch.commit();
};

export const convertArrayToMap = (arr) => {
  const itemsArr = arr.map((doc) => {
    const { items, title } = doc.data();
    console.log(doc.data());

    return {
      id: doc.id,
      route: encodeURI(title.toLowerCase()),
      items,
      title,
    };
  });

  return itemsArr.reduce((acc, item) => {
    acc[item.title.toLowerCase()] = item;
    return acc;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscibe = onAuthStateChanged(
      auth,
      (userAuth) => {
        console.log(userAuth);
        unsubscibe();
        resolve(userAuth);
      },
      reject
    );
  });
};
