import { Link } from "react-router-dom";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { handleLogOut } from "../../Redux/Auth/auth.action";

function Navbar() {
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top">
      <Link className="navbar-brand" to="/">
        <img
          src="/Images/logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top nav-brand-image mr-2"
          alt="Brand logo"
        />
        SocialVerse
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="true"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Feed
            </Link>
          </li>
          <li className="nav-item dropdown">
            <p
              className="nav-link dropdown-toggle mx-0 mt-0 mb-0"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Analytics
            </p>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdown"
            >
              <Link className="dropdown-item" to="/user-analytics">
                User analytics
              </Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/post-analytics">
                Post analytics
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <p
              className="nav-link dropdown-toggle  mx-0 mt-0 mb-0"
              id="navbarDropdown-2"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Lists
            </p>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdown-2"
              data-bs-theme="dark"
            >
              <Link className="dropdown-item" to="/user-list">
                User List
              </Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/post-list">
                Post List
              </Link>
            </div>
          </li>
          {!isAuth ? (
            <li className="nav-item">
              <Link className="nav-link" to="/auth">
                Login
              </Link>
            </li>
          ) : (
            <li
              className="nav-item"
              onClick={() => dispatch(handleLogOut(dispatch))}
            >
              <p
                className="nav-link mx-0 mt-0 mb-0"
                style={{ cursor: "pointer" }}
              >
                Logout
              </p>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
