import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import {
  handlePostsDelete,
  handlePostsUpdate,
} from "../../../Redux/Posts/post.action";

export default function PostEdits() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const [editing, setEditing] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const confirmDelete = useRef();
  const [postData, setPostData] = useState({
    content: "",
  });

  const handleChange = ({ name, value }) => {
    setPostData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (deleting) {
      if (confirmDelete.current.value == "Confirm Delete") {
        dispatch(handlePostsDelete(dispatch, id));
        navigate("/");
      } else {
        alert("Unable to delete user. Try again!");
      }
      setDeleting(!deleting);
    } else if (editing) {
      dispatch(
        handlePostsUpdate(dispatch, id, {
          content: postData.content,
        }),
      );
      setEditing(!editing);
    }
  };

  useEffect(() => {
    axios
      .get(`https://socialverse.onrender.com/posts/${id}`)
      .then(({ data }) => {
        const { error, post, message } = data;
        if (error) {
          alert(message);
          return;
        }
        setPostData(() => post);
        return;
      })
      .catch((err) => {
        alert("Something went wrong. Please try again!");
        console.log(err);
        return;
      });
  }, []);

  const { content } = postData;
  return (
    <div className="container">
      <div className="card text-black rounded-4">
        <div className="card-body p-md-5">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
              <p className="text-left h2 fw-bold mb-2 mx-1 mx-md-4 mt-0">
                Post
              </p>
              <form className="mx-1 mx-md-4">
                <div className="form-outline flex-fill mb-3">
                  <label htmlFor="postContent">Content:</label>
                  <textarea
                    className="form-control"
                    id="postContent"
                    name="content"
                    rows={6}
                    defaultValue={content}
                    onChange={(elem) => handleChange(elem.target)}
                    disabled={!editing}
                  />
                </div>
                {deleting ? (
                  <div className="form-outline flex-fill mb-3">
                    <label htmlFor="postDelete">Type 'Confirm Delete':</label>
                    <input
                      type="text"
                      placeholder=""
                      className="form-control"
                      id="postDelete"
                      ref={confirmDelete}
                    />
                  </div>
                ) : null}
                <div className="text-left">
                  {editing || deleting ? (
                    <button
                      type="button"
                      className={`btn btn-${
                        deleting ? "danger" : "success"
                      } btn-md`}
                      onClick={() => handleSubmit()}
                    >
                      Confirm
                    </button>
                  ) : (
                    <div className="row gap-2">
                      <button
                        type="button"
                        className="btn btn-success btn-md"
                        onClick={() => setEditing(!editing)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger btn-md"
                        onClick={() => setDeleting(!deleting)}
                      >
                        Delete User
                      </button>
                    </div>
                  )}
                </div>
              </form>
            </div>
            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
              <img
                src="/Images/register-vector.jpg"
                className="img-fluid"
                alt="Side Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
