import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import {
  emailSignInStart,
  signInWithGoogle,
  resetAllAuthForms,
} from "../../redux/User/user.actions";

import "./styles.scss";
import Button from "../Forms/Button/index.js";
import AuthWrapper from "../AuthWrapper/index.js";

import FormInput from "../Forms/FormInput/index.js";

const mapState = ({ user }) => ({
  signInSuccess: user.signInSuccess,
});

const SignIn = (props) => {
  const { signInSuccess } = useSelector(mapState);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (signInSuccess) {
      resetForm();
      dispatch(resetAllAuthForms());
      props.history.push("/");
    }
  }, [signInSuccess]);

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  };

  const handleGoogleSignIn = () => {
    dispatch(signInWithGoogle());
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
              <Button onClick={handleGoogleSignIn}>
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
