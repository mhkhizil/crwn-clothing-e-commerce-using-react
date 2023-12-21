import React, { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../util/firebase/firebase.utils";
import "./sign-up-form.style.scss"
import InputCompo from "../form-input/formIput.component";
const SignUpForm = () => {
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passowrd does not match the confirm password");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormField();
    } catch (e) {
      if (e.code === "auth/email-already-in-use") {
        alert("Cannot create user! Email already in use ");
      } else {
        console.log(e);
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Dont have an account?</h2>
      <span>Sign up with your email and password</span>
      <form action="" onSubmit={handleSubmit}>

        <InputCompo
          label={"Display name"}
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />

        <InputCompo
          label={"Email"}
          type="email"
          name="email"
          required
          value={email}
          onChange={handleChange}
        />

        <InputCompo
          label={"Password"}
          type="password"
          name="password"
          required
          value={password}
          onChange={handleChange}
        />

        <InputCompo
          label={"Confirm password"}
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
