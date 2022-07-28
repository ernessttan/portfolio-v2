/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import { NavLink } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import PropTypes from "prop-types";
import {
  GitHub, Twitter, Linkedin, Mail,
} from "react-feather";

function Navbar({
  isDarkMode, toggleDarkMode, isNavOpen, toggleNav,
}) {
  return (
    <nav className={`${isNavOpen ? "block py-5" : "hidden "} w-full dark:dark-text md:flex md:w-auto md:items-center md:justify-between md:grow`}>
      <div className="flex flex-col gap-5 md:gap-20 md:flex-row md:ml-20">
        <NavLink onClick={toggleNav} className="nav-link" to="/">Home</NavLink>
        <NavLink onClick={toggleNav} className="nav-link" to="/contact">Contact</NavLink>
        <a href="/Ernest Tan_Resume.pdf" className="nav-link" download>Resume</a>
      </div>
      <div className="py-8 flex items-center gap-5 md:py-0">
        <DarkModeSwitch
          className="mr-3"
          moonColor="white"
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={25}
        />
        <a target="_blank" href="https://twitter.com/ernessttan" rel="noreferrer">
          <Twitter className="w-6 h-6 dark:fill-offwhite" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/ernesttan23/" rel="noreferrer">
          <Linkedin className="w-6 h-6 dark:fill-offwhite" />
        </a>
        <a target="_blank" href="https://github.com/ernessttan" rel="noreferrer">
          <GitHub className="w-6 h-6 dark:fill-offwhite" />
        </a>
        <a target="_blank" href="mailto:ernesttancw@gmail.com" rel="noreferrer">
          <Mail className="w-6 h-6 dark:stroke-offwhite" />
        </a>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
  isNavOpen: PropTypes.bool.isRequired,
  toggleNav: PropTypes.func.isRequired,
};

export default Navbar;
