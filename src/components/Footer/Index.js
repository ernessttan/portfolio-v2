import { NavLink } from "react-router-dom";
import { GlobeIcon } from "@heroicons/react/outline";

function Footer() {
  return (
    <footer className="bg-offwhite -mx-8 -my-8 p-5 px-8 dark:bg-lightblack dark:dark-text md:-mx-14 md:p-10 md:px-14">
      <NavLink to="/">
        <svg className="logo lg:desktop fill-black dark:fill-offwhite" viewBox="0 0 77 44" xmlns="http://www.w3.org/2000/svg">
          <path d="M35.0583 25.3569C35.0583 26.3371 34.997 27.3581 34.8745 28.42H11.1666C11.3299 30.5437 12.0038 32.1773 13.1882 33.3208C14.4134 34.4235 15.9041 34.9748 17.6602 34.9748C20.274 34.9748 22.0914 33.8722 23.1124 31.6668H34.2619C33.6901 33.913 32.6487 35.9346 31.1376 37.7316C29.6673 39.5286 27.8091 40.9376 25.5629 41.9586C23.3166 42.9796 20.8049 43.4901 18.0278 43.4901C14.6789 43.4901 11.6975 42.7754 9.08372 41.346C6.46993 39.9165 4.42791 37.8745 2.95765 35.2199C1.4874 32.5653 0.752268 29.4614 0.752268 25.9083C0.752268 22.3551 1.46698 19.2513 2.89639 16.5966C4.36665 13.942 6.40867 11.9 9.02246 10.4706C11.6363 9.04115 14.638 8.32644 18.0278 8.32644C21.3359 8.32644 24.2764 9.02073 26.8493 10.4093C29.4223 11.7979 31.4235 13.7786 32.8529 16.3516C34.3231 18.9245 35.0583 21.9263 35.0583 25.3569ZM24.3376 22.6002C24.3376 20.8032 23.725 19.3738 22.4998 18.3119C21.2746 17.2501 19.7431 16.7192 17.9053 16.7192C16.1491 16.7192 14.6584 17.2297 13.4332 18.2507C12.2489 19.2717 11.5137 20.7215 11.2278 22.6002H24.3376ZM59.6367 34.1172V43H54.307C50.5089 43 47.5479 42.0811 45.4242 40.2433C43.3005 38.3646 42.2387 35.322 42.2387 31.1154V17.5155H38.073V8.81653H42.2387V0.485076H52.7143V8.81653H59.5755V17.5155H52.7143V31.2379C52.7143 32.259 52.9593 32.9941 53.4494 33.4433C53.9395 33.8926 54.7563 34.1172 55.8998 34.1172H59.6367ZM70.3727 43.4901C68.5348 43.4901 67.0237 42.9592 65.8394 41.8973C64.6958 40.7946 64.1241 39.4469 64.1241 37.8541C64.1241 36.2205 64.6958 34.8523 65.8394 33.7496C67.0237 32.6469 68.5348 32.0956 70.3727 32.0956C72.1696 32.0956 73.6399 32.6469 74.7834 33.7496C75.9678 34.8523 76.56 36.2205 76.56 37.8541C76.56 39.4469 75.9678 40.7946 74.7834 41.8973C73.6399 42.9592 72.1696 43.4901 70.3727 43.4901Z" />
        </svg>
      </NavLink>
      <div className="my-5 flex gap-5 md:gap-15 md:flex-row">
        <NavLink className="nav-link md:desktop lg:desktop-large" to="/">Home</NavLink>
        <NavLink className="nav-link md:desktop lg:desktop-large" to="/contact">Contact</NavLink>
        <a href="/Ernest Tan_Resume.pdf" className="nav-link md:desktop lg:desktop-large" download>Resume</a>
      </div>
      <div className="my-5 flex items-center gap-5 md:py-0">
        <a target="_blank" href="https://www.twitter.com" rel="noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-twitter footer-icon lg:desktop dark:fill-offwhite"
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
            className="feather feather-linkedin footer-icon lg:desktop dark:fill-offwhite"
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
            className="feather feather-mail footer-icon lg:desktop dark:stroke-offwhite"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </a>
      </div>
      <div className="flex items-center gap-2 my-5">
        <GlobeIcon className="w-5 h-5" />
        <p className="dark:dark-text md:desktop lg:desktop-large">Copyright 2022, Ernest Tan</p>
      </div>
    </footer>
  );
}

export default Footer;
