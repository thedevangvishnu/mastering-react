import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUp from "../../components/sign-up-form/sign-up-form.component";

import SignIn from "../../components/sign-in-form/sign-in-form.component";

const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log("user", user);
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log("userDoc:", userDocRef);
  };

  return (
    <div>
      <h1>Authentication Page</h1>

      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
