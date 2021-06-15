import { combineReducers } from "redux";
import pessoas from "./pessoas";
import ceps from "./ceps";
// import auth from "./auth";

export default combineReducers({
  pessoas,
  ceps
//   ,  auth
});