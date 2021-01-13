import { combineReducers } from "redux";

const dummyReducer = () => {
  return "replace me";
};

export default combineReducers({ dummy: dummyReducer });
