import { NavLink } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import PropTypes from "prop-types";

function Navbar({ isDarkMode, toggleDarkMode, isNavOpen }) {
  return (
    <nav className={`${isNavOpen ? "block" : "hidden "} w-full py-5 dark:dark-text md:flex md:w-auto md:items-center md:justify-between md:grow`}>
      <div className="flex flex-col gap-5 md:gap-20 md:flex-row md:ml-56">
        <NavLink className="nav-link" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/">Projects</NavLink>
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </div>
      <div className="py-8 flex items-center gap-5 md:py-0">
        <DarkModeSwitch
          className="mr-5"
          moonColor="white"
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={25}
        />
        <a target="_blank" href="https://www.twitter.com" rel="noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-twitter w-6 h-6 dark:fill-offwhite"
          >
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
          </svg>
        </a>
        <a target="_blank" href="https://www.twitter.com" rel="noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-linkedin w-6 h-6 dark:fill-offwhite"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        <a target="_blank" href="https://www.twitter.com" rel="noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-mail w-6 h-6 dark:stroke-offwhite"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
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
