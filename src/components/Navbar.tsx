import "./Navbar.css";
import ThemeToggle from "./ThemeToggle";
import leapfrogLogo from "../assets/leapfrogLogo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src={leapfrogLogo}
          alt="Leapfrog Technology"
          className="logo-img"
        />
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#mentors">Mentors</a>
        </li>
        <li>
          <a href="#resources">Resources</a>
        </li>
      </ul>
      <div className="navbar-actions">
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
