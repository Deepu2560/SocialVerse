import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import {
  handleUserDelete,
  handleUserUpdate,
} from "../../../Redux/Auth/auth.action";

export default function UserEdits() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { id } = useParams();

  const [editing, setEditing] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const confirmDelete = useRef();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    bio: "",
  });

  const handleChange = ({ name, value }) => {
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (deleting) {
      if (confirmDelete.current.value == "Confirm Delete") {
        dispatch(handleUserDelete(dispatch, id, userData._id == user._id));
      } else {
        alert("Unable to delete user. Try again!");
      }
      setDeleting(!deleting);
      navigate("/");
    } else if (editing) {
      dispatch(
        handleUserUpdate(dispatch, id, userData._id == user._id, {
          name: userData.name,
          bio: userData.bio,
        }),
      );
      setEditing(!editing);
      navigate("/");
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/users/${id}`)
      .then(({ data }) => {
        const { error, user, message } = data;
        if (error) {
          alert(message);
          return;
        }
        setUserData(() => user);
        return;
      })
      .catch((err) => {
        alert("Something went wrong. Please try again!");
        console.log(err);
        return;
      });
  }, []);

  const { name, email, bio } = userData;
  return (
    <div className="container">
      <div className="card text-black rounded-4">
        <div className="card-body p-md-5">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
              <p className="text-left h2 fw-bold mb-2 mx-1 mx-md-4 mt-0">
                User
              </p>
              <form className="mx-1 mx-md-4">
                <div className="form-outline flex-fill mb-3">
                  <label htmlFor="userNmae">name:</label>
                  <input
                    name="name"
                    type="text"
                    id="userNmae"
                    className="form-control"
                    defaultValue={name}
                    onChange={(elem) => handleChange(elem.target)}
                    disabled={!editing}
                  />
                </div>
                <div className="form-outline flex-fill mb-3">
                  <label htmlFor="userEmail">email:</label>
                  <input
                    name="email"
                    type="email"
                    id="userEmail"
                    className="form-control"
                    defaultValue={email}
                    disabled
                  />
                </div>
                <div className="form-outline flex-fill mb-3">
                  <label htmlFor="userBio">bio:</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="userBio"
                    name="bio"
                    defaultValue={bio}
                    onChange={(elem) => handleChange(elem.target)}
                    disabled={!editing}
                  />
                </div>
                {deleting ? (
                  <div className="form-outline flex-fill mb-3">
                    <label htmlFor="userDelete">Type 'Confirm Delete':</label>
                    <input
                      type="text"
                      placeholder=""
                      className="form-control"
                      id="userDelete"
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
