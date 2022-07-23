import { MailIcon, ChatAlt2Icon } from "@heroicons/react/outline";
import { Twitter, Linkedin, GitHub } from "react-feather";
import OffWhiteSection from "../common/OffWhiteSection";

function ContactIntro() {
  return (
    <OffWhiteSection>
      <h1 className="dark:dark-text md:desktop lg:desktop-large">Contact Me</h1>
      <p className="dark:dark-text md:desktop lg:desktop-large">
        I am always excited to hear from people so please
        get in touch with me via one of these methods:
      </p>
      <div className="grid grid-cols-1 items-center gap-3 md:grid-cols-2 lg:grid-cols-3 my-10">
        <div>
          <div className="flex items-center gap-3">
            <MailIcon className="w-8 h-8 dark:text-offwhite" />
            <h2 className="dark:dark-text md:desktop lg:desktop-large">Email Me</h2>
          </div>
          <p className="my-3 dark:dark-text md:desktop lg:desktop-large">ernesttancw@gmail.com</p>
        </div>
        <div className="">
          <div className="flex items-center gap-3">
            <ChatAlt2Icon className="w-8 h-8 text-black dark:text-offwhite" />
            <h2 className="dark:dark-text md:desktop lg:desktop-large">Socials</h2>
          </div>
          <div className="flex items-center gap-3 my-3">
            <a className="cursor-pointer" href="https://twitter.com/ernessttan">
              <Twitter className="w-7 h-7 dark:stroke-offwhite" />
            </a>
            <a className="cursor-pointer" href="https://www.linkedin.com/in/ernesttan23/">
              <Linkedin className="w-7 h-7 dark:stroke-offwhite" />
            </a>
            <a className="cursor-pointer" href="https://github.com/ernessttan">
              <GitHub className="w-7 h-7 dark:stroke-offwhite" />
            </a>
          </div>
        </div>
      </div>
    </OffWhiteSection>
  );
}

export default ContactIntro;
