import React, { useEffect } from "react";
import { auth, createUserDocumentFromAuth, signInWithGooglePopUp, signInWithGoogleRedirect } from "../../util/firebase/firebase.utils";
import {getRedirectResult} from "firebase/auth"
import SignUpForm from "../../components/sign-up form/sign-up-form.component";
const SignIn = () => {
    //redirect nk sign in lk yin d hr lo dl bcz redirect pyn lk ya dl atwt data ka pyout twr lo
    // useEffect(async ()=>{
    //     const response=await getRedirectResult(auth);
    //     if (response) {
    //         const userDocRef=await createUserDocumentFromAuth(response.user);
    //     }
    // },[])
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopUp();
    const userDocRef=await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in with google pop up</button>
      {/* <button onClick={signInWithGoogleRedirect}>Sign in with google pop up</button> */}
      <SignUpForm/>
    </div>
  );
};

export default SignIn;
