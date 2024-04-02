import { NavLink } from "react-router-dom";
import "./navbar.scss";

const Navbar = ({ getUrl }) => {
  return (
    <header id="navbar">
      <div className="header-top">
        <NavLink to="/">
          <img className="signature" src={getUrl("icons/signature.svg")} alt="signature" />
        </NavLink>

        <NavLink to="/">
          <img src={getUrl("icons/frontend-developer.svg")} alt="frontend-developer" />
        </NavLink>

        <img className="theme-icon" src={getUrl("icons/moon-icon.svg")} alt="theme-icon" onClick={() => console.log("change-theme")} />
      </div>

      <nav>
        <div>
          <NavLink className={({ isActive }) => (isActive ? "underline" : "")} to="/about-me">
            ABOUT ME
          </NavLink>
          <a href="#featured_projects_section">PROJECTS</a>
          <a href="/#contact_section">CONTACT</a>
        </div>

        <div className="socials-container">
          <a href="https://www.linkedin.com/in/stefanrogic/" target="_blank">
            <img src={getUrl("icons/linkedin-icon.svg")} alt="frontend-developer" />
          </a>
          <a href="https://github.com/stefanrogic" target="_blank">
            <img src={getUrl("icons/github-icon.svg")} alt="frontend-developer" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
