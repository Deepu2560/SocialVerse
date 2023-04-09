export default function SignInForm() {
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
            />
          </div>
          <div className="form-outline flex-fill mb-0">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
            />
          </div>
        </div>
        <div className="text-left mb-3">
          <button type="button" className="btn btn-success btn-md">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
