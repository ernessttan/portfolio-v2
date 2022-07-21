function Hero() {
  return (
    <section>
      <img className="rounded-full h-52 w-52" src="/images/ernest.jpeg" alt="ernest hero" />
      <div className="my-5">
        <h1>Hey there! Im Ernest</h1>
        <p>
          I am a software engineer from Singapore.
          I am senior at Columbia University majoring in Computer Science.
          I am currently looking for full time opportunities.
        </p>
      </div>
      <button className="action-button transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:text-orange duration-300" type="button">
        <span>Hire Me</span>
      </button>
    </section>
  );
}

export default Hero;
