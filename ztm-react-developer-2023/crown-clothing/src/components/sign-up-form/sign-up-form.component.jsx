import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

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
    <div>
      <h1>This is the Sign Up form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="displayName">Display Name</label>
        <input
          required
          type="text"
          id="displayName"
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          required
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          required
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          required
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
