import jsonPlaceholder from "../apis/jsontypicode";

export const fetchPosts = async () => {
  const response = await jsonPlaceholder.get("/posts");
  return {
    type: "Fetch_DATA",
    payload: response,
  };
};
