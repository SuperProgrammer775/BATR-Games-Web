import userTypes from "./user.types";
import {
  auth,
  handleUserProfile,
  GoogleProvider,
} from "../../firebase/utils.js";

export const resetAllAuthForms = () => ({
  type: userTypes.RESET_AUTH_FORMS,
});

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
  console.log(displayName);
  console.log(email);
  console.log(password);
  console.log(confirmPassword);
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
    // CATCH ERRORS TO MAKE BETTER USER EXPERIENCE
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
        dispatch({
          type: userTypes.RESET_PASSWORD_SUCCESS,
          payload: true,
        });
      })
      .catch(() => {
        const err = ["Email not found. Please sign up"];
        dispatch({
          type: userTypes.RESET_PASSWORD_ERROR,
          payload: err,
        });
      });
  } catch (err) {
    // console.log(err)
  }
};

export const signInWithGoogle = () => async (dispatch) => {
  try {
    await auth.signInWithPopup(GoogleProvider).then(() => {
      dispatch({
        type: userTypes.SIGN_IN_SUCCESS,
        payload: true,
      });
    });
  } catch (err) {
    // console.log(err)
  }
};
