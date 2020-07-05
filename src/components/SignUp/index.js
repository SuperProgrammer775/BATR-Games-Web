import React, { useState } from "react";
import "./styles.scss";

import { auth, handleUserProfile } from "../../firebase/utils.js";

import FormInput from "../Forms/FormInput/index.js";
import Button from "../Forms/Button/index.js";
import AuthWrapper from "../AuthWrapper/index.js";

const initialState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
  errors: [],
};

const Signup = (props) => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState("");

  const reset = () => {
    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrors([]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      const err = ["Password and Confirm Password Don't Match"];
      setErrors(err);
      reset();
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await handleUserProfile(user, { displayName });

      reset();
    } catch (err) {
      // console.log(err)
    }
  };

  const configAuthWrapper = {
    headline: "Registration",
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      {errors.length > 0 && (
        <ul className="err">
          {errors.map((err, index) => {
            return <li key={index}>{err}</li>;
          })}
        </ul>
      )}

      <div className="formWrap">
        <form onSubmit={handleFormSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            placeholder="Full Name"
            handleChange={(e) => setDisplayName(e.target.value)}
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            handleChange={(e) => setPassword(e.target.value)}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm Password"
            handleChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button type="submit">Sign Up!</Button>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default Signup;
