import { NavLink } from "react-router-dom";
import { GlobeIcon } from "@heroicons/react/outline";

function Footer() {
  return (
    <footer className="bg-offwhite -mx-8 -my-8 p-5">
      <img className="w-8 h-8 md:w-12 md:h-12" src="/logo.svg" alt="ernesttan logo" />
      <div className="my-3 flex gap-5 md:gap-20 md:flex-row md:ml-56">
        <NavLink className="nav-link" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/">Projects</NavLink>
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </div>
      <div className="my-3 flex items-center gap-5 md:py-0">
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
      <div className="flex items-center gap-2 my-3">
        <GlobeIcon className="w-5 h-5" />
        <p>Copyright 2022, Ernest Tan</p>
      </div>
    </footer>
  );
}

export default Footer;
