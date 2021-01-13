import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

const BlogList = ({ fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, []);
  return <div>BlogList</div>;
};

export default connect(null, { fetchPosts })(BlogList);
