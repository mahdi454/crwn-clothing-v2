import { initializeApp } from "firebase/app";
import {
  signOut,
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAgOEKzolZR_N3Zj6YUZkE2LludrouSFls",
  authDomain: "shop-d9901.firebaseapp.com",
  projectId: "shop-d9901",
  storageBucket: "shop-d9901.appspot.com",
  messagingSenderId: "77490390159",
  appId: "1:77490390159:web:52cbf9083f681712419cfa",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();
export const createUserDocFromAuth = async (userAuth, addInfo) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);
  if (!userSnapShot.exists()) {
    const { email, displayName } = userAuth;
    const createDat = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createDat, ...addInfo });
    } catch (error) {
      console.error(error, " ***********");
    }
  }
  return userDocRef;
};

export const createUserWithEmailAndPasswordSignUp = async (email, password) => {
  if (!password || !email) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInUserWithEmailAndPasswordSignUp = async (email, password) => {
  if (!password || !email) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
export const createSignOut=async ()=>await signOut(auth);

export const onAuthStateChangedListener=(callback)=>onAuthStateChanged(auth,callback);