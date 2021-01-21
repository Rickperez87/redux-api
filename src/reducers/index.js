import { combineReducers } from "redux";
import postsReducer from "./postsReducer";

export default combineReducers({ comment: commentReducer });

function commentReducer(state = [], action) {
  switch (action.type) {
    case "COMMENT_LIST":
      return state;
      break;
    case "ADD_COMMENT":
      state = [...state, action.payload];
      return state;
      break;
    default:
      return state;
  }
}
