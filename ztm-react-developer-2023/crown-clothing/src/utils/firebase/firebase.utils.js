import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAw9aAPiyuVLWIRzBQTFg8r2zwwZexU6YM",
  authDomain: "crown-clothing-db-e6138.firebaseapp.com",
  projectId: "crown-clothing-db-e6138",
  storageBucket: "crown-clothing-db-e6138.appspot.com",
  messagingSenderId: "451600980806",
  appId: "1:451600980806:web:6192d02ed0428eb904e347",
};

const firebaseApp = initializeApp(firebaseConfig);

// set up a provider
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
