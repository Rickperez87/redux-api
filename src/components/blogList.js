import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

const BlogList = ({ fetchPosts, posts }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);
  console.log(posts);

  return <div>BlogList</div>;
};
const mapStatetoProps = (state) => {
  return { posts: state.posts };
};
export default connect(mapStatetoProps, { fetchPosts })(BlogList);
