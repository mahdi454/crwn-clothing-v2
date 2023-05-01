import React from "react";
import FormInput from "../sign-in-form/signin-com";

import {
  createUserWithEmailAndPasswordSignUp,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase-util";
import { useState} from "react";
import './signup-style.scss'
import Button from "../btn/btn-com";
const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmpassword: "",
};
const SignUpForm = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const { displayName, email, password, confirmpassword } = formField;
 
  const resetForm = () => {
    setFormField(defaultFormField);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmpassword) {
      alert("password not match");
      return;
    }
    try {
      const { user } = await createUserWithEmailAndPasswordSignUp(
        email,
        password
      );

    
      await createUserDocFromAuth(user, { displayName });
      resetForm();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already exist try another email");
      } else {
        console.log(error);
      }
    }
  };
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };
  return (
    <div className="sign-up-container">
        <h1>I do not have an account</h1>
      <h2>welcome to sign up form</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          required
          type="text"
          onChange={onChangeHandler}
          name="displayName"
          value={displayName}
          label="DisplayName"
        />

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

        <FormInput
          required
          type="password"
          onChange={onChangeHandler}
          name="confirmpassword"
          value={confirmpassword}
          label="Confirmp Password"
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
