import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";

import "./sign-up-form.styles.scss";

import Button from "../button/button.component";

import { Form } from "react-router-dom";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  //   console.log(formFields);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password and Confirm-password do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      const userDocRef = await createUserDocumentFromAuth(user, {
        displayName,
      });
      console.log("user doc through sign up:", userDocRef);
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user. Email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>New to Crown Clothing?</h2>
      <p>Don't worry! Create a new account</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display name"
          required
          type="text"
          id="displayName"
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />

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

        <FormInput
          label="Confirm password"
          required
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />

        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default SignUp;
