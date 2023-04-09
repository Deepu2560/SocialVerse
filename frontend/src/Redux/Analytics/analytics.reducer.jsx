// importing all login action types
import {
  USER_TOP_SUCCESS,
  USER_TOTAL_SUCCESS,
  POST_TOP_SUCCESS,
  POST_TOTAL_SUCCESS,
} from "./analytics.action";

// defining initial state
const initialStore = {
  userTop: null,
  userTotal: 0,
  postTop: null,
  postTotal: 0,
};

// reducer function
export const AnalyticsReducer = (state = initialStore, { type, payload }) => {
  switch (type) {
    case USER_TOP_SUCCESS:
      return {
        ...state,
        userTop: payload,
      };
    case USER_TOTAL_SUCCESS:
      return {
        ...state,
        userTotal: payload,
      };
    case POST_TOP_SUCCESS:
      return {
        ...state,
        postTop: payload,
      };
    case POST_TOTAL_SUCCESS:
      return {
        ...state,
        postTotal: payload,
      };
    default:
      return state;
  }
};
