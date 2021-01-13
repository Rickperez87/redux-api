import jsonPlaceholder from "../apis/jsontypicode";

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "Fetch_DATA", payload: response });
};
