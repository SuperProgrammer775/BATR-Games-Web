import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "./styles.scss";
import Button from "../Forms/Button/index.js";
import { signInWithGoogle, auth } from "./../../firebase/utils.js";
import AuthWrapper from "../AuthWrapper/index.js";

import FormInput from "../Forms/FormInput/index.js";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      auth.signInWithEmailAndPassword(email, password);
      resetForm();
      props.history.push("/");
    } catch (err) {
      // console.log(err);
    }
  };

  const configAuthWrapper = {
    headline: "Login",
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        <form onSubmit={handleSubmit}>
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

export default withRouter(SignIn);
