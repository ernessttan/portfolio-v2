import React from 'react';
import linkedinIcon from '../assets/icons/linkedin.svg';
import githubIcon from '../assets/icons/github.svg';
import mailIcon from '../assets/icons/mail.svg';

function Hero() {
  return (
    <section className="mt-8">
      <div>
        <h1>Hi, I&apos;m Ernest.</h1>
        <h3 className="mt-5">I&apos;m a software engineer studying computer science at Columbia University.</h3>
        <div className="flex gap-3 mt-5">
          <img src={linkedinIcon} alt="Linkedin Icon" />
          <img src={githubIcon} alt="Github Icon" />
          <img src={mailIcon} alt="Mail Icon" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
