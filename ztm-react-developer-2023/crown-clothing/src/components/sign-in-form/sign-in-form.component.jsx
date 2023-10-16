import { useState } from "react";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";

import "./sign-in-form.styles.scss";

import Button from "../button/button.component";

import { Form } from "react-router-dom";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  // log google user
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // console.log("user", user);
    const userDocRef = await createUserDocumentFromAuth(user);
    // console.log("userDoc:", userDocRef);
    console.log("sign in successful");
  };

  // handle form input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  // resset form fields once form is submitted
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  // handle form submit and sign-in already existing user in user doc
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log("sign in successful", response);
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/invalid-login-credentials") {
        alert(
          "Invalid login credentials. Please check your email and/or password"
        );
      } else {
        console.log("error signing in the user", error.message);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account</h2>
      <p>Sign in using your email and password or sign in using Google</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          required
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          required
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button type="button" buttonType="google" onClick={logGoogleUser}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
