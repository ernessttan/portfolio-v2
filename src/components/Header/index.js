import { MenuIcon } from "@heroicons/react/outline";
import { useState } from "react";
import PropTypes from "prop-types";
import Navbar from "../common/Navbar";

function Header({ isDarkMode, toggleDarkMode }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prevState) => !prevState);
  };
  return (
    <header className="flex flex-wrap items-center justify-between w-full">
      <img className="w-8 h-8 md:w-12 md:h-12" src="/logo.svg" alt="ernesttan logo" />
      <button type="button" onClick={toggleNav}>
        <MenuIcon className="w-8 h-8 md:hidden" />
      </button>
      <Navbar
        isNavOpen={isNavOpen}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
    </header>
  );
}

Header.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

export default Header;
