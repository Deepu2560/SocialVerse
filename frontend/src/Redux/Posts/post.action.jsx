// importing axios
import axios from "axios";

// createing and exporting all action type will be used in reducer
export const POST_LOADING = "POST_LOADING";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_ERROR = "POST_ERROR";
export const POST_LIKES_REFRESH = "POST_LIKES_REFRESH";

// all functions for changing state of reducer
export const postLoading = () => ({ type: POST_LOADING });
export const postSuccess = (payload) => ({ type: POST_SUCCESS, payload });
export const postError = () => ({ type: POST_ERROR });
export const postLikesRefresh = (payload) => ({
  type: POST_LIKES_REFRESH,
  payload,
});

// function handlePost will create a new post
export const handlePost = (dispatch, data) => {
  return function () {
    axios
      .post(`http://localhost:8080/posts`, data, {
        Headers: { "Content-Type": "application/json", Accept: "*/*" },
      })
      .then(({ data }) => {
        const { error, message } = data;
        if (error) {
          alert(message);
          return;
        }
        dispatch(handlePostsData(dispatch, "all"));
        return;
      })
      .catch((err) => {
        alert("Some thing went wrong. Please try again!");
        return;
      });
  };
};

// function handleUserData get user data with the help of user id
export const handlePostsData = (dispatch, id) => {
  return function () {
    axios
      .get(`http://localhost:8080/posts/${id}`, {
        Headers: { "Content-Type": "application/json", Accept: "*/*" },
      })
      .then(({ data }) => {
        const { error, post, message } = data;
        if (error) {
          console.log(message);
          return;
        }
        dispatch(postSuccess(post));
        return;
      })
      .catch((err) => {
        dispatch(authError());
        console.log(err);
        return;
      });
  };
};

// function handleuserudate udpate user data with the help of userid
export const handleUserUpdate = (dispatch, id, data) => {
  return function () {
    axios
      .post(`http://localhost:8080/posts/${id}`, data, {
        Headers: { "Content-Type": "application/json", Accept: "*/*" },
      })
      .then(({ data }) => {
        const { error, user, message } = data;
        if (error) {
          console.log(message);
          return;
        }
        handleUserData(dispatch, id, data);
        return;
      })
      .catch((err) => {
        console.log(err);
        return;
      });
  };
};

// function handleUserData delete user data with the help of user id
export const handleUserDelete = (dispatch, id, data) => {
  return function () {
    axios
      .delete(`http://localhost:8080/posts/${id}`, data, {
        Headers: { "Content-Type": "application/json", Accept: "*/*" },
      })
      .then(({ data }) => {
        const { error, user, message } = data;
        if (error) {
          console.log(message);
          return;
        }
        dispatch(authSuccess(user));
        return;
      })
      .catch((err) => {
        dispatch(authError());
        console.log(err);
        return;
      });
  };
};
