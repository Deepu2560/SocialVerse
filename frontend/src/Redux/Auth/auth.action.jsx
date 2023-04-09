// importing axios
import axios from "axios";

// createing and exporting all action type will be used in reducer
export const AUTH_LOADING = "AUTH_LOADING";
export const AUTH = "AUTH";
export const AUTH_ERROR = "AUTH_ERROR";
export const LOG_OUT = "LOG_OUT";
export const ALL_USER_DATA = "ALL_USER_DATA";

// all functions for changing state of reducer
export const authLoading = () => ({ type: AUTH_LOADING });
export const authSuccess = (payload) => ({ type: AUTH, payload });
export const authError = () => ({ type: AUTH_ERROR });
export const allUsersData = (payload) => ({ type: ALL_USER_DATA, payload });
export const logoutSuccess = () => ({ type: LOG_OUT });

// function to handle login process
export const handlelogin = (dispatch, route, data) => {
  return function () {
    dispatch(authLoading());
    axios
      .post(`http://localhost:8080/users${route}`, data, {
        Headers: { "Content-Type": "application/json", Accept: "*/*" },
      })
      .then(({ data }) => {
        const { error, user, message } = data;
        if (error) {
          console.log(message);
          dispatch(authError());
          return;
        }
        dispatch(authSuccess(user));
        dispatch(handleUserData(dispatch, "all"));
        return;
      })
      .catch((err) => {
        dispatch(authError());
        console.log(err);
        return;
      });
  };
};

// function handleUserData get user data with the help of user id
export const handleUserData = (dispatch, id) => {
  return function () {
    axios
      .get(`http://localhost:8080/users/${id}`, {
        Headers: { "Content-Type": "application/json", Accept: "*/*" },
      })
      .then(({ data }) => {
        const { error, user, message } = data;
        if (error) {
          alert(message);
          return;
        }
        dispatch(allUsersData(user));
        return;
      })
      .catch((err) => {
        alert("Something went wrong. Please try again!");
        console.log(err);
        return;
      });
  };
};

// function handleuserudate udpate user data with the help of userid
export const handleUserUpdate = (dispatch, id, data) => {
  return function () {
    axios
      .post(`http://localhost:8080/users/${id}`, data, {
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
      .delete(`http://localhost:8080/users/${id}`, data, {
        Headers: { "Content-Type": "application/json", Accept: "*/*" },
      })
      .then(({ data }) => {
        const { error, message } = data;
        if (error) {
          console.log(message);
          return;
        }
        dispatch(handleLogOut(dispatch));
        return;
      })
      .catch((err) => {
        console.log(err);
        return;
      });
  };
};

// function handle logout of user
export const handleLogOut = (dispatch) => {
  return () => dispatch(logoutSuccess());
};
