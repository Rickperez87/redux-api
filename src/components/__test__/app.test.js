import React from "react";
import App from "components/App";
import CommentList from "components/commentList";
import CommentBox from "components/commentBox";
import { shallow } from "enzyme";

it("shows a comment box", () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(CommentList).length).toEqual(1);
});
