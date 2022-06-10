import React from 'react';
import linkedinIcon from '../assets/icons/linkedin.svg';
import githubIcon from '../assets/icons/github.svg';
import mailIcon from '../assets/icons/mail.svg';

function Hero() {
  return (
    <section className="h-[100vh] md:mt-32">
      <div className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-1 lg:gap-4 items-center">
        <img className="col-span-1 rounded-full mb-10 w-48 h-48 md:w-56 md:h-56 lg:w-60 lg:h-60 xl:h-96 xl:w-96" src="/images/ernest.jpeg" alt="Ernest" />
        <div className="md:order-first col-span-2">
          <h1 className="text-4xl md:text-5xl">Hi, I&apos;m Ernest.</h1>
          <h3 className="text-2xl mt-8 mb-8">I&apos;m a software engineer studying computer science at Columbia University.</h3>
          <div className="flex items-center gap-3 mb-10">
            <a href="https://www.linkedin.com/in/ernesttan23/">
              <img className="md:w-10 md:h-10" src={linkedinIcon} alt="Linkedin Icon" />
            </a>
            <a href="https://github.com/ernessttan">
              <img className="md:w-10 md:h-10" src={githubIcon} alt="Github Icon" />
            </a>
            <a href="mailto:ernesttancw@gmail.com">
              <img className="md:w-10 md:h-10" src={mailIcon} alt="Mail Icon" />
            </a>
          </div>
          <a className="scroll-smooth" href="#projects">
            <span className="link link-underline link-underline-green text-black text-2xl">Check out my Work</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
