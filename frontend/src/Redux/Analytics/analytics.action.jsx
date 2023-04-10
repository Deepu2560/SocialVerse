// importing axios
import axios from "axios";

// createing and exporting all action type will be used in reducer
export const USER_TOTAL_SUCCESS = "USER_TOTAL_SUCCESS";
export const USER_TOP_SUCCESS = "USER_TOP_SUCCESS";
export const POST_TOTAL_SUCCESS = "POST_TOTAL_SUCCESS";
export const POST_TOP_SUCCESS = "POST_TOP_SUCCESS";

// all functions for changing state of reducer
export const userTotalSuccess = (payload) => ({
  type: USER_TOTAL_SUCCESS,
  payload,
});
export const userTopSuccess = (payload) => ({
  type: USER_TOP_SUCCESS,
  payload,
});
export const postTotalSuccess = (payload) => ({
  type: POST_TOTAL_SUCCESS,
  payload,
});
export const postTopSuccess = (payload) => ({
  type: POST_TOP_SUCCESS,
  payload,
});

// function to handle login process
export const handleAllAnalytics = (dispatch) => {
  return function () {
    dispatch(handleUserTotal(dispatch));
    dispatch(handleUserTop(dispatch));
    dispatch(handlePostTotal(dispatch));
    dispatch(handlePostTop(dispatch));
  };
};

// function to handleUserTotal getting count all users
export const handleUserTotal = (dispatch) => {
  return function () {
    axios
      .get(`https://socialverse.onrender.com/analytics/users`, {
        Headers: { "Content-Type": "application/json", Accept: "*/*" },
      })
      .then((res) => {
        const { error, data, message } = res.data;
        if (error) {
          alert(message);
          return;
        }
        dispatch(userTotalSuccess(data));
        return;
      })
      .catch((err) => {
        alert("Something went wrong. Please try Again!");
        return;
      });
  };
};

// function to handleUserTop getting top 5 active users
export const handleUserTop = (dispatch) => {
  return function () {
    axios
      .get(`https://socialverse.onrender.com/analytics/users/top-active`, {
        Headers: { "Content-Type": "application/json", Accept: "*/*" },
      })
      .then((res) => {
        const { error, data, message } = res.data;
        if (error) {
          alert(message);
          return;
        }
        dispatch(userTopSuccess(data));
        return;
      })
      .catch((err) => {
        alert("Something went wrong. Please try Again!");
        return;
      });
  };
};

// function to handle login process
export const handlePostTotal = (dispatch) => {
  return function () {
    axios
      .get(`https://socialverse.onrender.com/analytics/posts`, {
        Headers: { "Content-Type": "application/json", Accept: "*/*" },
      })
      .then((res) => {
        const { error, data, message } = res.data;
        if (error) {
          alert(message);
          return;
        }
        dispatch(postTotalSuccess(data));
        return;
      })
      .catch((err) => {
        alert("Something went wrong. Please try Again!");
        return;
      });
  };
};

// function to handle login process
export const handlePostTop = (dispatch) => {
  return function () {
    axios
      .get(`https://socialverse.onrender.com/analytics/posts/top-liked`, {
        Headers: { "Content-Type": "application/json", Accept: "*/*" },
      })
      .then((res) => {
        const { error, data, message } = res.data;
        if (error) {
          alert(message);
          return;
        }
        dispatch(postTopSuccess(data));
        return;
      })
      .catch((err) => {
        alert("Something went wrong. Please try Again!");
        return;
      });
  };
};
