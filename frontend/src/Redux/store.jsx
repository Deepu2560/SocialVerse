// importing required tools
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// importing all reducers
import { AuthReducer } from "./Auth/auth.reducer";
import { PostReducer } from "./Posts/post.reducer";

// all root reducers
const rootReducer = combineReducers({
  auth: AuthReducer,
  posts: PostReducer,
});

// applying middleware
const middlewareEnhancer = applyMiddleware(thunk);

// main redux store
export const store = createStore(rootReducer, middlewareEnhancer);
