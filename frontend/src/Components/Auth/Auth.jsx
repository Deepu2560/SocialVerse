import { useEffect } from "react";
import { useSelector } from "react-redux";
import SignInForm from "./SignInForm/SignInForm";
import SignUpForm from "./SignUpForm/SignUpForm";
import { useNavigate } from "react-router";

export default function Authentication() {
  const navigate = useNavigate();
  const { isError, isAuth } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isError && isAuth) {
      navigate("/");
    } else if (isError) {
      alert("Please Check your Email and Password");
    }
  }, [isError, isAuth]);
  return (
    <div className="container">
      <div className="card text-black rounded-4">
        <div className="card-body p-md-5">
          <SignInForm />
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}
