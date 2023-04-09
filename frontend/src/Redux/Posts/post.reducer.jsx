// importing all login action types
import {
  POST_LOADING,
  POST_SUCCESS,
  POST_ERROR,
  POST_LIKES_REFRESH,
} from "./post.action";

// defining initial state
const initialStore = {
  isLoading: false,
  posts: [],
  isError: false,
};

// reducer function
export const PostReducer = (state = initialStore, { type, payload }) => {
  switch (type) {
    case POST_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: payload,
        isError: false,
      };
    case POST_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case POST_LIKES_REFRESH:
      return {
        ...state,
        isLoading: false,
        posts: state.posts.filter((elem) => {
          if (elem._id == payload.id) {
            elem.likes = payload.likes;
          }
          return elem;
        }),
        isError: false,
      };
    default:
      return state;
  }
};
