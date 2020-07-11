import userTypes from "./user.types";
import { auth, handleUserProfile } from "../../firebase/utils.js";

export const setCurrentUser = (user) => ({
  type: userTypes.SET_CURRENT_USER,
  payload: user,
});

export const signInUser = ({ email, password }) => async (dispatch) => {
  try {
    auth.signInWithEmailAndPassword(email, password);
    dispatch({
      type: userTypes.SIGN_IN_SUCCESS,
      payload: true,
    });
  } catch (err) {
    // console.log(err);
  }
};

export const signUpUser = ({
  displayName,
  email,
  password,
  confirmPassword,
}) => async (dispatch) => {
  if (password !== confirmPassword) {
    const err = ["Password and Confirm Password Don't Match"];
    dispatch({
      type: userTypes.SIGN_UP_ERROR,
      payload: err,
    });
    return;
  }

  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);

    await handleUserProfile(user, { displayName });
    dispatch({
      type: userTypes.SIGN_UP_SUCCESS,
      payload: true,
    });
  } catch (err) {
    // console.log(err)
  }
};

export const resetPassword = ({ email }) => async (dispatch) => {
  const config = {
    url: "http://localhost:3000/login",
  };

  try {
    await auth
      .sendPasswordResetEmail(email, config)
      .then(() => {
        // props.history.push("/login");
      })
      .catch(() => {
        const err = ["Email not found. Please sign up"];
        // setErrors(err);
      });
  } catch (err) {
    // console.log(err)
  }
};
