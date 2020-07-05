import { combineReducers } from "redux";
import userReducer from "./User/user.reducer.js";

export default combineReducers({
  user: userReducer,
});
