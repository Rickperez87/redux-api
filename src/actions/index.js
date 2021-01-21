// import jsonPlaceholder from "../apis/jsontypicode";

// export const fetchPosts = () => async (dispatch) => {
//   const response = await jsonPlaceholder.get("/posts");

//   dispatch({ type: "FETCH_POSTS", payload: response.data });
// };

export const commentList = () => {
  return {
    type: "COMMENT_LIST",
    payLoad: [],
  };
};

export const addComment = (comment) => {
  return {
    type: "ADD_COMMENT",
    payload: comment,
  };
};
