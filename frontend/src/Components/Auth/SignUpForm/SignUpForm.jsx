import { useState } from "react";
import { useDispatch } from "react-redux";
import { handlelogin } from "../../../Redux/Auth/auth.action";

export default function SignUpForm() {
  const dispatch = useDispatch();
  const [signupdata, setSignupdata] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
  });

  const handleSignUp = () => {
    dispatch(handlelogin(dispatch, "/", signupdata));
    return;
  };

  const handleChange = ({ name, value }) => {
    setSignupdata((prev) => ({ ...prev, [name]: value }));
    return;
  };

  const { name, email, passwrod, bio } = signupdata;
  return (
    <div className="row align-items-center justify-content-center">
      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
        <p className="text-left h2 fw-bold mb-2 mx-1 mx-md-4 mt-0">Sign up</p>
        <form className="mx-1 mx-md-4">
          <div className="form-outline flex-fill mb-3">
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Your Name..."
              defaultValue={name}
              onChange={(elem) => handleChange(elem.target)}
            />
          </div>
          <div className="form-outline flex-fill mb-3">
            <input
              type="email"
              placeholder="Your Email..."
              className="form-control"
              name="email"
              defaultValue={email}
              onChange={(elem) => handleChange(elem.target)}
            />
          </div>
          <div className="form-outline flex-fill mb-3">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              name="password"
              defaultValue={passwrod}
              onChange={(elem) => handleChange(elem.target)}
            />
          </div>
          <div className="form-outline flex-fill mb-3">
            <input
              type="text"
              placeholder="Enter Bio Here..."
              className="form-control"
              name="bio"
              defaultValue={bio}
              onChange={(elem) => handleChange(elem.target)}
            />
          </div>
          <div className="text-left">
            <button
              type="button"
              className="btn btn-success btn-md"
              onClick={() => handleSignUp()}
            >
              Register
            </button>
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
  );
}
