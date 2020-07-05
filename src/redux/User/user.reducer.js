import userTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

const useReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default useReducer;
