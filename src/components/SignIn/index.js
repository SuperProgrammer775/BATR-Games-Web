import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import Button from "../Forms/Button/index.js";
import { signInWithGoogle, auth } from "./../../firebase/utils.js";
import AuthWrapper from "../AuthWrapper/index.js";

import FormInput from "../Forms/FormInput/index.js";

const initialState = {
  email: "",
  password: "",
};

const SignIn = (props) => {
  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      auth.signInWithEmailAndPassword(email, password);
      this.setState({
        ...initialState,
      });
    } catch (err) {
      // console.log(err);
    }
  };

  const { email, password } = this.state;

  const configAuthWrapper = {
    headline: "Login",
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={this.handleChange}
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            handleChange={this.handleChange}
          />

          <Button style={{ paddingBottom: ".5rem" }} type="submit">
            Login
          </Button>

          <div className="socialSignin">
            <div className="row">
              <Button onClick={signInWithGoogle}>
                Sign in/Sign up with Google
              </Button>
            </div>
          </div>

          <div className="links">
            <Link to="/recovery">Forgot Password</Link>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default SignIn;
