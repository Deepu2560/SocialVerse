import "./Navbar.css";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-md navbar-dark fixed-top">
      <a class="navbar-brand" href="#">
        <img
          src="/Images/logo.png"
          width="30"
          height="30"
          class="d-inline-block align-top nav-brand-image mr-2"
          alt="Brand logo"
        />
        SocialVerse
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Feed <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
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
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdown"
            >
              <a class="dropdown-item" href="#">
                User analytics
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                Post analytics
              </a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
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
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdown-2"
              data-bs-theme="dark"
            >
              <a class="dropdown-item" href="#">
                User List
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                Post List
              </a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
