import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top">
      <a className="navbar-brand" href="/">
        <img
          src="/Images/logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top nav-brand-image mr-2"
          alt="Brand logo"
        />
        SocialVerse
      </a>
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
            <a className="nav-link" href="/">
              Feed
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Analytics
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdown"
            >
              <a className="dropdown-item" href="/user-analytics">
                User analytics
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/post-analytics">
                Post analytics
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown-2"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Lists
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdown-2"
              data-bs-theme="dark"
            >
              <a className="dropdown-item" href="/user-list">
                User List
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/post-list">
                Post List
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/auth">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
