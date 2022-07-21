import { NavLink } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import PropTypes from "prop-types";

function Navbar({ isDarkMode, toggleDarkMode, isNavOpen }) {
  return (
    <nav className={`${isNavOpen ? "block" : "hidden "} w-full py-5 md:flex md:w-auto md:items-center md:justify-between md:grow`}>
      <div className="flex flex-col gap-5 md:gap-20 md:flex-row md:ml-56">
        <NavLink className="nav-link" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/">Projects</NavLink>
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </div>
      <div className="py-8 flex items-center gap-5 md:py-0">
        <DarkModeSwitch
          className="mr-5"
          moonColor="black"
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={25}
        />
        <a target="_blank" href="https://www.twitter.com" rel="noreferrer">
          <img src="/icons/twitter.svg" alt="twitter icon" />
        </a>
        <a target="_blank" href="https://www.twitter.com" rel="noreferrer">
          <img src="/icons/linkedin.svg" alt="linkedin icon" />
        </a>
        <a target="_blank" href="https://www.twitter.com" rel="noreferrer">
          <img src="/icons/mail.svg" alt="mail icon" />
        </a>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
  isNavOpen: PropTypes.bool.isRequired,
};

export default Navbar;
