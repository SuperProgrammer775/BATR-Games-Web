import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./styles.scss";
import AuthWrapper from "../AuthWrapper/index.js";
import FormInput from "../Forms/FormInput/index.js";
import Button from "../Forms/Button/index.js";
import { auth } from "../../firebase/utils.js";

const initialState = {
  email: "",
  errors: [],
};

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { email } = this.state;

      const config = {
        url: "http://localhost:3001/login",
      };

      await auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
          this.props.history.push("/login");
        })
        .catch(() => {
          const err = ["Email not found. Please sign up"];
          this.setState({
            errors: err,
          });
        });
    } catch (err) {
      // console.log(err)
    }
  };

  render() {
    const { email, errors } = this.state;

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

          <form onSubmit={this.handleSubmit}>
            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={this.handleChange}
            />

            <Button type="submit">Reset Password</Button>
          </form>
        </div>
      </AuthWrapper>
    );
  }
}

export default withRouter(ForgotPassword);
