import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/user.contexts";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopUp,
  signInAuthUserWithEmailAndPassword,
} from "../../util/firebase/firebase.utils";
import "./sign-in-form.style.scss";
import InputCompo from "../form-input/formIput.component";
import CustomButton from "../button/customButom.component";

const SignInForm = () => {
  const { setCurrentUser } = useContext(UserContext);
  const defaultFormFields = {
    email: "",
    password: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      resetFormField();
      setCurrentUser(user);
    } catch (e) {
      switch (e.code) {
        case "auth/wrong-password":
          alert("Incorrect password");
          break;
        case "auth/user-not-found":
          alert("Incorrect email");
          break;

        default:
          break;
      }
      if (e.code === "auth/wrong-password") {
        alert("Incorrect password");
      } else if (e.code === "auth/user-not-found") console.log(e);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopUp();
    await createUserDocumentFromAuth(user);
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form action="" onSubmit={handleSubmit}>
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

        <div className="buttons-container">
          <CustomButton children={"SIGN IN "} />
          <CustomButton
            type="button"
            onClick={signInWithGoogle}
            btnType={"google-sign-in"}
            children={"Google sign in"}
          />
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
