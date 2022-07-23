function Hero() {
  return (
    <section className="py-8 md:py-14 md:flex md:items-center md:gap-24 lg:py-20">
      <img className="rounded-full h-52 w-52 md:order-2 md:h-80 md:w-80 lg:h-96 lg:w-96" src="/images/ernest.jpeg" alt="ernest hero" />
      <div className="my-5 md:order-1">
        <h1 className="dark:dark-text md:desktop lg:desktop-large">Hey there! Im Ernest</h1>
        <p className="py-3 dark:dark-text md:desktop lg:desktop-large">
          I am a software engineer from Singapore.
          I am senior at Columbia University majoring in Computer Science.
          I am currently looking for full time opportunities.
        </p>
        <button className="action-button transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:text-orange duration-300 mt-5 md:desktop" type="button">
          <p className="text-offwhite">Hire Me</p>
        </button>
      </div>
    </section>
  );
}

export default Hero;
