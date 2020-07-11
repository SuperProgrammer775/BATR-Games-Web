import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./styles.scss";
import AuthWrapper from "../AuthWrapper/index.js";
import FormInput from "../Forms/FormInput/index.js";
import Button from "../Forms/Button/index.js";
import { auth } from "../../firebase/utils.js";

const ForgotPassword = (props) => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();


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
