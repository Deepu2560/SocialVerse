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
      .post(`https://socialverse.onrender.com/posts`, data, {
        Headers: { "Content-Type": "application/json", Accept: "*/*" },
      })
      .then(({ data }) => {
        const { error, message } = data;
        if (error) {
          alert(message);
          return;
        }
        alert("Created post successfully.");
        dispatch(handlePostsData(dispatch, "all"));
        return;
      })
      .catch((err) => {
        alert("Some thing went wrong. Please try again!");
        return;
      });
  };
};

// function handlePostsData get all posts data
export const handlePostsData = (dispatch, id) => {
  return function () {
    axios
      .get(`https://socialverse.onrender.com/posts/${id}`, {
        Headers: { "Content-Type": "application/json", Accept: "*/*" },
      })
      .then(({ data }) => {
        const { error, post, message } = data;
        if (error) {
          alert(message);
          return;
        }
        dispatch(postSuccess(post));
        return;
      })
      .catch((err) => {
        dispatch(authError());
        alert("Something went wrong. Please try again!");
        return;
      });
  };
};

// function handlePostsUpdate udpate post with the help of post id
export const handlePostsUpdate = (dispatch, id, data) => {
  return function () {
    axios
      .put(`https://socialverse.onrender.com/posts/${id}`, data, {
        Headers: { "Content-Type": "application/json", Accept: "*/*" },
      })
      .then(({ data }) => {
        const { error, user, message } = data;
        if (error) {
          alert(message);
          return;
        }
        alert("Updated post data successfully.");
        dispatch(handlePostsData(dispatch, "all"));
        return;
      })
      .catch((err) => {
        alert("Something went wrong. Please try again!");
        return;
      });
  };
};

// function handlePostsDelete delete post with the help of post id
export const handlePostsDelete = (dispatch, id) => {
  return function () {
    axios
      .delete(`https://socialverse.onrender.com/posts/${id}`, {
        Headers: { "Content-Type": "application/json", Accept: "*/*" },
      })
      .then(({ data }) => {
        const { error, message } = data;
        if (error) {
          alert(message);
          return;
        }
        alert("Deleted post successfully");
        dispatch(handlePostsData(dispatch, "all"));
        return;
      })
      .catch((err) => {
        alert("Something went wrong. Please try again!");
        return;
      });
  };
};

// function handlePostLike is increment likes for post with that id
export const handlePostLike = (dispatch, id) => {
  return function () {
    axios
      .post(`https://socialverse.onrender.com/posts/${id}/like`)
      .then(({ data }) => {
        const { error, likes, message } = data;
        if (error) {
          alert(message);
          return;
        }
        dispatch(postLikesRefresh({ id, likes }));
        return;
      })
      .catch((error) => {
        alert("Something went wrong. Plese try again!");
        return;
      });
  };
};

// function handlePostUnLike is decrement likes for post with that id
export const handlePostUnLike = (dispatch, id) => {
  return function () {
    axios
      .post(`https://socialverse.onrender.com/posts/${id}/unlike`)
      .then(({ data }) => {
        const { error, likes, message } = data;
        if (error) {
          alert(message);
          return;
        }
        dispatch(postLikesRefresh({ id, likes }));
        return;
      })
      .catch((error) => {
        alert("Something went wrong. Plese try again!");
        return;
      });
  };
};
