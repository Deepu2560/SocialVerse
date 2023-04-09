import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handlePostLike,
  handlePostUnLike,
} from "../../../Redux/Posts/post.action";
import "./PostCard.css";

export default function PostCard({ data }) {
  const [liked, setLiked] = useState(false);
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div className="text-left border border-success mt-3 mb-3 p-3 rounded-3">
      <pre className="font-weight-bold border mx-auto text-left p-3 rounded-3 post-content-div">
        {data.content}
      </pre>
      <p className="h6 mx-3">Likes: {data.likes}</p>
      {isAuth ? (
        <div className="d-flex gap-1">
          {!liked ? (
            <button
              className="btn btn-outline-success ml-3"
              onClick={() => {
                setLiked(() => true);
                dispatch(handlePostLike(dispatch, data._id));
              }}
            >
              like
            </button>
          ) : (
            <button
              className="btn btn-outline-danger ml-3"
              onClick={() => {
                setLiked(() => false);
                dispatch(handlePostUnLike(dispatch, data._id));
              }}
            >
              unlike
            </button>
          )}
          <button className="btn btn-outline-secondary ml-2">edit</button>
        </div>
      ) : (
        <div className="d-flex gap-1">
          <a href="/auth" className="btn btn-outline-secondary ml-2">
            Login to like this post
          </a>
        </div>
      )}
    </div>
  );
}
