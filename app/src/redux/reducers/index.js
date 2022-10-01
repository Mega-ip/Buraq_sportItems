import { combineReducers } from "redux";
import appReducer from "./main";
export default combineReducers({ app: appReducer });
