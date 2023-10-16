/* 1 - Setting up firebase */

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

// my web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw9aAPiyuVLWIRzBQTFg8r2zwwZexU6YM",
  authDomain: "crown-clothing-db-e6138.firebaseapp.com",
  projectId: "crown-clothing-db-e6138",
  storageBucket: "crown-clothing-db-e6138.appspot.com",
  messagingSenderId: "451600980806",
  appId: "1:451600980806:web:6192d02ed0428eb904e347",
};

// initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

/* ..................................................... */

/* 2 - Setting up authentication*/

// create a new provider instance and set custom parameters
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

// call getAuth() to store authentication
export const auth = getAuth();

// create a functionality for signing in with popup
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// create a functionality for singing in with redirect
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

/* ..................................................... */

/* 3 - Setting up Firestore database */

export const db = getFirestore();

// create a function that creates new user document from authetication
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "user", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);
  console.log("userSnapShot", userSnapShot.exists());

  // create user document if it doesn't exist
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating the user:", error.message);
    }
  }

  return userDocRef;
};

// functionality to create user with email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

// functionality to sign in user with email and password
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

// functionality to sign out user
export const signOutAuthUser = async () => await signOut(auth);

///////////////////////////////////////////////////////////////////////////////////////////

// Notes on Firestore

/* Firestore 

1) Setting up firestore
    - Sign in with google email into Firestore web app
    - Create a data-base and name it to get the firebase config
    - npm install firebase
    - create a js file for firebase and import {initializeApp} from "firebase/app"
    - Firebase has multiple sublibraries that have their own purpose.
    - Create an instance of initializeApp() by passing the firebase config to it.

2) Setting up Authentication
    - Go to Firebase and select Authentication. 
    - Select Google, Facebook or any other auth services of your choice.
    - Enable it.
    - Import authentication methods using "firebase/auth" library.
    - getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider are some of the important ones
    - Set up a new provider instance of GoogleAuthProvider() class and call setCustomParameters() method of provider instance to set custom parameter, which takes in an object (such as prompt: "select_account").
    - Call getAuth() and store its reference.
    - Create a function (such as SignInWithGoogle) using signInWithPopup() method from firebase/auth library. signInWithPopup() takes two parameters: auth and provider. Export this new functionality and call it on your event handler for the sign-in button.

3) Setting up Firestore Database

*/
