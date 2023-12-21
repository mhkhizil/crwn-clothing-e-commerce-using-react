import React, {  useState } from "react";


import SignUpForm from "../../components/sign-up form/sign-up-form.component";

import SignInForm from "../../components/sign-in form/sign-in-form.component";
import "../authentication/authentication.style.scss"
const data={
  email:'',
  password:''
}
const Authentication = () => {
  const [changeData,setChangeData]=useState(data);
  const {email,password}=data;
  const changeHandler=(event)=>{
    const {name,value}=event.target;
    setChangeData({...data,[name]:value})
  }
    //redirect nk sign in lk yin d hr lo dl bcz redirect pyn lk ya dl atwt data ka pyout twr lo
    // useEffect(async ()=>{
    //     const response=await getRedirectResult(auth);
    //     if (response) {
    //         const userDocRef=await createUserDocumentFromAuth(response.user);
    //     }
    // },[])
    

  return (
    <div className="authentication-container">
      {/* <h2>Dont have an account?</h2>
      <span>Sign up with your email and password</span>
      <InputCompo name="email" value={email} onChange={changeHandler}  type="email" required label={"Email"}/>
      <InputCompo name="password" value={password} onChange={changeHandler}  type="password" required  label={"Password"}/>
      <CustomButton children={"SIGN IN "}/>
      <CustomButton btnType={"google-sign-in"} onClick={logGoogleUser} children={"SIGN IN WITH GOOGLE"}/> */}
      {/* <button onClick={signInWithGoogleRedirect}>Sign in with google pop up</button> */}
      <SignInForm/>
      <SignUpForm/>
    </div>
  );
};

export default Authentication;
