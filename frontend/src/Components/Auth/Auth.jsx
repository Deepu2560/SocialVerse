import SignInForm from "./SignInForm/SignInForm";
import SignUpForm from "./SignUpForm/SignUpForm";

export default function Authentication() {
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
