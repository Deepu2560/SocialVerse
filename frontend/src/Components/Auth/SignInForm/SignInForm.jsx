import { useState } from "react";
import { useDispatch } from "react-redux";
import { handlelogin } from "../../../Redux/Auth/auth.action";

export default function SignInForm() {
  const dispatch = useDispatch();

  const [signindata, setSigninData] = useState({ email: "", password: "" });

  const handleSignIn = () => {
    dispatch(handlelogin(dispatch, "/login", signindata));
    return;
  };

  const handleChange = ({ name, value }) => {
    setSigninData((prev) => ({ ...prev, [name]: value }));
    return;
  };

  const { email, password } = signindata;
  return (
    <div className="container">
      <p className="text-left h2 fw-bold mb-2">Sign in</p>
      <form className="row">
        <div className="d-flex flex-row gap-2 align-items-center mb-3">
          <div className="form-outline flex-fill mb-0">
            <input
              type="email"
              placeholder="Your Email..."
              className="form-control"
              name="email"
              defaultValue={email}
              onClick={(elem) => handleChange(elem.target)}
            />
          </div>
          <div className="form-outline flex-fill mb-0">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              name="password"
              defaultValue={password}
              onClick={(elem) => handleChange(elem.target)}
            />
          </div>
        </div>
        <div className="text-left mb-3">
          <button
            type="button"
            className="btn btn-success btn-md"
            onClick={() => handleSignIn()}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
