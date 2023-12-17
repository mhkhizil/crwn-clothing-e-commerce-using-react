import React from "react";
import { signInWithGooglePopUp } from "../../util/firebase/firebase.utils";
const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopUp();
    console.log(response);
  };
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in with google pop up</button>
    </div>
  );
};

export default SignIn;
