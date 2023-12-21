import React, { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const handleChange=(event)=>{
    const {name,value}=event.target;
    setFormFields({...formFields,[name]:value})
  }
  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form action="" onSubmit={() => {}}>
        <label htmlFor="">Dislay Name</label>
        <input type="text" required name="displayName" value={displayName}  onChange={handleChange}/>
        <label htmlFor="">Email</label>
        <input type="email" name="email" required value={email} />
        <label htmlFor="">Password</label>
        <input type="password" name="password" required value={password} />
        <label htmlFor="">Confirm Password</label>
        <input
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
