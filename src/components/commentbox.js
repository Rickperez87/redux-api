import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

const CommentBox = ({ state, addComment, commentList }) => {
  const [textVal, setTextVal] = useState("");

  const handleChange = (e) => {
    setTextVal(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(textVal);
    setTextVal("");
  };
  console.log(state);
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={textVal} onChange={handleChange} />
      <button>submit</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return { state: state };
};

export default connect(null, actions)(CommentBox);
