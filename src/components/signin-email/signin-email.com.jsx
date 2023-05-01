import React from "react";
import FormInput from "../sign-in-form/signin-com";
import { useState } from "react";

import {
 
  signInWithGooglePopup,
  signInUserWithEmailAndPasswordSignUp
} from "../../utils/firebase/firebase-util";

import "./signin-style.scss";
import Button from "../btn/btn-com";
const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmpassword: "",
};
const SignEmail = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const { email, password } = formField;
  
  const resetForm = () => {
    setFormField(defaultFormField);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const {user}=await signInUserWithEmailAndPasswordSignUp(email,password)
       
        resetForm()
    } catch (error) {
        switch (error.code){case  "auth/wrong-password":
          alert("Invalid Password");
          break;
          case  "auth/user-not-found":
          alert("No user exist with this email");
          break;
          default:
            console.log(error)
        } 
      }
  };
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };
  const googleLogIn = async () => {
    const { user } = await signInWithGooglePopup();
    
  };
  return (
    <div className="sign-up-container">
      <h1>Already have an account</h1>
      <h2>Sign in with email or google</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          required
          type="email"
          onChange={onChangeHandler}
          name="email"
          value={email}
          label="Email"
        />
        <FormInput
          required
          type="password"
          onChange={onChangeHandler}
          name="password"
          value={password}
          label="Password"
        />
        <div className="signin-btn-container">
          <Button type='button' onClick={googleLogIn} btnType="google">
            Sign In google
          </Button>
          <Button type="submit">Sign Up</Button>
        </div>
      </form>
    </div>
  );
};

export default SignEmail;
