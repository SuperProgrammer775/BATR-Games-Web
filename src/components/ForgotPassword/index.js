import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  resetPassword,
  resetAllAuthForms,
} from "../../redux/User/user.actions";
import "./styles.scss";
import AuthWrapper from "../AuthWrapper/index.js";
import FormInput from "../Forms/FormInput/index.js";
import Button from "../Forms/Button/index.js";

const mapState = ({ user }) => ({
  resetPasswordSuccess: user.resetPasswordSuccess,
  resetPasswordError: user.resetPasswordError,
});

const ForgotPassword = (props) => {
  const { resetPasswordSuccess, resetPasswordError } = useSelector(mapState);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");

  useEffect(() => {
    if (resetPasswordSuccess) {
      dispatch(resetAllAuthForms());
      props.history.push("/login");
    }
  }, [resetPasswordSuccess]);

  useEffect(() => {
    if (Array.isArray(resetPasswordError) && resetPasswordError.length > 0) {
      setErrors(resetPasswordError);
    }
  }, [resetPasswordError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword({ email }));
  };

  const configAuthWrapper = {
    headline: "Forgot Password",
  };
  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        {errors.length > 0 && (
          <ul className="err">
            {errors.map((e, index) => {
              return <li key={index}>{e}</li>;
            })}
          </ul>
        )}

        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button type="submit">Reset Password</Button>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default withRouter(ForgotPassword);
