// importing all login action types
import {
  AUTH_LOADING,
  AUTH,
  AUTH_ERROR,
  ALL_USER_DATA,
  LOG_OUT,
} from "./auth.action";

// defining initial state
const initialStore = {
  isLoading: false,
  user: null,
  all: null,
  isAuth: false,
  isError: false,
};

// reducer function
export const AuthReducer = (state = initialStore, { type, payload }) => {
  switch (type) {
    case AUTH_LOADING:
      return {
        ...state,
        isLoading: true,
        user: state.user,
        isAuth: state.isAuth,
        isError: false,
      };
    case AUTH:
      return {
        ...state,
        isLoading: false,
        user: payload,
        isAuth: true,
        isError: false,
      };
    case AUTH_ERROR:
      return {
        ...state,
        isLoading: false,
        user: state.user,
        isAuth: state.isAuth,
        isError: true,
      };
    case ALL_USER_DATA:
      return {
        ...state,
        all: payload,
      };
    case LOG_OUT:
      return {
        isLoading: false,
        user: null,
        all: null,
        isAuth: false,
        isError: false,
      };
    default:
      return state;
  }
};
