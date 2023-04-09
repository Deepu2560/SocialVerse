import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { handlePost } from "../../../Redux/Posts/post.action";

export default function CreatePost() {
  const { isAuth, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const content = useRef();

  const handleCreatePost = () => {
    if (!content.current.value) {
      return;
    }
    let data = {
      user_id: user._id,
      content: content.current.value,
    };
    dispatch(handlePost(dispatch, data));
    content.current.value = "";
    return;
  };

  return (
    <div className="pt-4 text-right">
      <p className="h5 text-left text-uppercase">Create a new post:</p>
      <textarea
        className="form-control text-light focus-ring focus-ring-success bg-dark text-decoration-none border rounded-2"
        id="newposttextarea"
        rows="5"
        placeholder="Start a post"
        ref={content}
        disabled={!isAuth}
      ></textarea>
      {isAuth ? (
        <button
          className="newpostbutton btn btn btn-outline-success mt-3"
          onClick={() => handleCreatePost()}
        >
          post your content
        </button>
      ) : (
        <button
          className="newpostbutton btn btn btn-outline-success mt-3"
          onClick={() => navigate("/auth")}
        >
          Login
        </button>
      )}
    </div>
  );
}
