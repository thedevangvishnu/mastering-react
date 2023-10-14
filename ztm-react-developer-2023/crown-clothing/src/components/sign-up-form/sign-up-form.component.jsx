import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>This is the Sign Up form</h1>
      <form action="">
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
