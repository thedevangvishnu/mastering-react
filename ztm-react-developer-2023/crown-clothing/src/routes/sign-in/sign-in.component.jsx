import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUp from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
        console.log("userDoc:", userDocRef);
      }
    };
    fetchData();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log("user", user);
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log("userDoc:", userDocRef);
  };

  return (
    <div>
      <h1>I am the Sign In page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>
      <SignUp />
    </div>
  );
};

export default SignIn;
