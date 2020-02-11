import jsonPlaceholder from "../api/jsonPlaceholder";

//action creator should return a plain js obj
//however, in this case of const= response it returns 1) request, 2) obj (actions)
//for this we use thunk with dispatch and getState functions

export const fetchPosts = userId => async dispatch => {
  const response = await jsonPlaceholder.get(`/posts/${userId}`);

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUsers = () => async dispatch => {
  const response = await jsonPlaceholder.get("/users");

  dispatch({ type: "FETCH_USERS", payload: response.data });
};

export const getUserPosts = userId => async dispatch => {
  const response = await jsonPlaceholder.get(`/posts/${userId}`);

  dispatch({ type: "FETCH_USER_POSTS", payload: response.data });
};

// export const selectPost = () => {return {type: 'SELECT_POST'}};
