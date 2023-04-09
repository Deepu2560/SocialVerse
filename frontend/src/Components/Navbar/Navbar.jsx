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
          <li class="nav-item">
            <a class="nav-link" href="#">
              Analytics
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Services
            </a>
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
